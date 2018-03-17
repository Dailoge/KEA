function shiying() {
    var height = $('#shiying').height();
    var headerHeight = $('.kea_body_top').height();
    var footerHeight = $('.kea_body_bottom').height();
    var windowHeight = $(document).height();
    var height1 = windowHeight - headerHeight - footerHeight;
    if (height < height1) {
        $('#shiying').css('height', height1);
    }
}

//画曲线图函数
function chartById(id, option, number) {
    var chart = echarts.init(document.getElementById(id));
    var option1 = {
        title: {
            show: false
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        legend: {
            data: ['line1', 'line2'],
            bottom: '10px',
            left: '40px',
            textStyle: {
                color: '#fff'
            }
        },
        toolbox: {
            show: false,
            feature: {
                saveAsImage: {}
            }
        },
        grid: {
            show: true,
            top: '5%',
            left: '2%',
            right: '2%',
            bottom: '10%',
            containLabel: true,
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: ['13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30'],
                axisLabel: {
                    interval: 0,
                    rotate: 40,
                    color: '#048ce4',
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLabel: {
                    color: '#048ce4',
                }
            }
        ],
        series: [
            {
                name: 'Forecast Data',
                type: 'line',
                stack: '总量',
                smooth: 'true',
                lineStyle: {normal: {color: '#e8c752'}},
                areaStyle: {normal: {color: '#e8c752', opacity: 0.4}},
                data: [20, 32, 10, 44, 30, 20, 10, 20, 20, 12, 11, 34, 20, 30]
            },
            {
                name: 'Model Data',
                type: 'line',
                stack: '总量1',
                smooth: 'true',
                lineStyle: {normal: {color: '#03e3ec'}},
                areaStyle: {normal: {color: '#03e3ec', opacity: 0.4}},
                data: [20, 12, 11, 34, 20, 33, 30, 20, 32, 10, 34, 30, 23, 45]
            },
        ]
    };
    if (number == 1) {
        option1.series.pop();
    }
    var options = $.extend(true, {}, option1, option);
    chart.setOption(options);
}

/*
 id为容器  必填
 xNum为x轴数据的个数  必填
 range为y轴数据的范围
 option为echarts的参数
 lineNum为线的个数, 1为一条,其他为两条
*/
function chart(id, xNum, range, option, lineNum) {
    var x_data = [];
    var x_data1 = [];
    var option1 = {
        series: [
            {
                data: []
            },
            {
                data: []
            },
        ]
    };
    option2 = $.extend(true, {}, option1, option);
    var range1 = range || 1000;
    for (var i = 0; i < xNum; i++) {
        x_data[i] = Math.random() * range1;
    }
    for (var i = 0; i < xNum; i++) {
        x_data1[i] = Math.random() * range1;
    }
    option2.series[0].data = x_data;
    option2.series[1].data = x_data1;
    chartById(id, option2)
}

function getData() {
    var data = $("form").serialize();
    var object = JSON.parse(localStorage.getItem('data'));
    for (var i in object) {
        object[i] = object[i].replace(/\+/g, " ");
    }
    if (data != '') {
        var array = data.split('&');
        //console.log(object);
        if (object != null) {
            array.forEach(function (item, index, array) {
                var posi = item.indexOf('=');
                var left = item.slice(0, posi);
                //var right=item.slice(posi+1,item.length);
                //console.log(left);
                if (object.hasOwnProperty(left)) {
                    console.log(left);
                    var value = decodeURIComponent(object[left]);//转回正常编码//decodeURIComponent
                    value = decodeURIComponent(value);
                    value = value.replace(/\+/g, " ");
                    $('input[name=' + left + ']').val(value);
                    $('select[name=' + left + ']').val(value);
                }
            });
        }
    } else {

    }
    $('#bottom-button button').click(function () {
        var data = $("form").serialize();
        var array = data.split('&');
        if (object == null) {
            object = {};
        }
        //object['name']=1;
        array.forEach(function (item, index, array) {
            var posi = item.indexOf('=');
            if (posi < item.length - 1) {
                var left = item.slice(0, posi);
                var right = item.slice(posi + 1, item.length);
                //console.log(left + " " + right);
                object[left] = escape(right);
            }
        });
        console.log(object);
        localStorage.setItem('data', JSON.stringify(object));
    });
    return object;
}

function replaceSign(object) {
    for (var i in object) {
        object[i] = decodeURIComponent(object[i]);
    }
    return object;
}

function filterValue() {
    var array = ['Marketsr', '2G', '3G', '4G', 'equipment', 'dch'];
    array.forEach(function (item, index, array) {
        $("input[name=" + item + ']').blur(function () {
            this.value = this.value.replace(/[^0-9-]+/, '');
            var value = $(this).val();
            var length = value.length;
            var end = value.indexOf('%');
            //console.log(end);
            if (end == -1) {
                if ($(this).val() !== '')
                    $(this).val(value + '%');
                return;
            }
            if (end != length - 1) {
                alert('Data in wrong format!');
                return;
            }
        });
    });
}

$(function () {
    filterValue();
});

function getTime(number) {
    var time = new Date();
    var year = time.getFullYear();
    var month = (time.getMonth() + 1).toString().length == 1 ? '0' + (time.getMonth() + 1) : time.getMonth() + 1;
    var date = time.getDate().toString().length == 1 ? '0' + time.getDate() : time.getDate();
    var hour = time.getHours().toString().length == 1 ? '0' + time.getHours() : time.getHours();
    var minute = time.getMinutes().toString().length == 1 ? '0' + time.getMinutes() : time.getMinutes();
    var second = time.getSeconds().toString().length == 1 ? '0' + time.getSeconds() : time.getSeconds();
    var now = year + "-" + month + '-' + date + ' ' + hour + ':' + minute + ':' + second;
    var now1 = year + "-" + month + '-' + date;
    if (number == 1) {
        return now1;
    }
    return now;
}

function judgeTime(oldtime, dateline) {
    var newtime = getTime();
    var oldDate = new Date(oldtime);
    var newDate = new Date(newtime);
    var short = dateline * 1000 || 5000;
    if (newDate.getTime() - oldDate.getTime() >= short) {
        //console.log('大于三秒');
        return true;
    } else {
        //console.log('小于三秒');
        return false;
    }
}

/*
$(function(){
	$('select').mousedown(function(){
		var length=$(this)[0].options.length;
		if(length>7){
			$(this)[0].size=7;
		}
	});
	$('option').click(function(){
		$(this).parent('select').removeAttr('size');
	});
	$('select').blur(function(){
		$(this).removeAttr('size');
	});
});
*/
var timeInput = "<input maxlength='2' type='text'  class='GTime'>" + "<span>:</span>" +
    "<input maxlength='2' type='text'  class='GTime'>" + "<span>-</span>" +
    "<input maxlength='2' type='text'  class='GTime'>" + "<span>:</span>" +
    "<input maxlength='2' type='text'  class='GTime'>";

function tableAdd(date1, configadd) {
    var tr = document.createElement('tr');
    var add = '';
    var date = date1 || getTime(1);
    var gtime = '';
    var data = {Add: add, Date: date, GTime: gtime, config: ""};
    for (var i in data) {
        var td = document.createElement('td');
        if (i == 'GTime') {
            td.innerHTML = timeInput +
                "<a href=" + configadd + " class='config'> configuration</a>"
        }
        else {
            td.innerHTML = data[i];
        }
        tr.appendChild(td);
    }
    $('#content table').append(tr);
}


function getTimeArr(starthour, endhour, stepmiutes) {
    var stmin = [];
    var hourarr = [];
    var timestamp = '';
    for (var i = 0; i < 60; i += stepmiutes) {
        if (i < 10)
            stmin.push('0' + i.toString())
        else
            stmin.push(i.toString())
    }
    for (var i = starthour; i < endhour; i++) {
        stmin.forEach(function (item, index, array) {
            if (i < 10)
                timestamp = '0' + i;
            else
                timestamp = i;
            hourarr.push(timestamp + ':' + item);
        });
    }
    if (endhour < 10)
        timestamp = '0' + endhour;
    else
        timestamp = endhour;
    hourarr.push(timestamp + ':' + '00');
    return hourarr;
}

var month2num = {
    'Jan': 1,
    'Feb': 2,
    'Mar': 3,
    'Apr': 4,
    'May': 5,
    'Jun': 6,
    'Jul': 7,
    'Aug': 8,
    'Sep': 9,
    'Oct': 10,
    'Nov': 11,
    'Dec': 12
};

function gdetailsNumChange() {
    document.getElementById("g-tim-num").innerText = document.getElementsByClassName("detail-label").length;
}

function gdetailsAdd(time) {
    // gdetailsAdd("12:00-33:00")
    var detaildiv = document.getElementById("g-time-detail");
    var div = document.createElement("div");
    div.className = "col-lg-4 detail-div";
    var label = document.createElement("label");
    label.className = "col-lg-12 detail-label";
    label.innerText = time;
    div.appendChild(label);
    detaildiv.appendChild(div);
    gdetailsNumChange();
}

function activeDayShow() {
    var details = document.getElementsByClassName("detail-div");
    for (var i = 0; i < details.length; i++) details[i].remove();
    var date = document.getElementsByClassName("active");
    var day = date[0].innerText;
    var month = month2num[date[1].innerText];
    var year = date[2].innerText;
    var dates = localStorage.getItem('gtimedetails');
    dates = JSON.parse(dates);
    if (dates == null)
        return
    if (dates[year + '-' + month + '-' + day] !== null) {
        dates[year + '-' + month + '-' + day].forEach(function (item) {
            gdetailsAdd(item);
        })
    }
}

function addStar() {
    var dates = localStorage.getItem('gtimedetails');
    dates = JSON.parse(dates);
    for (var date in dates) {
        var ymonth = $('.datepicker-days th.picker-switch')[0].innerText;
        var allTd = $('#datetimepicker td.active');
        var val1 = date.substr(-2, 2);
        if (date.indexOf(ymonth) != -1) {
            for (var i = 0; i < allTd.length; i++) {
                var val2 = $(allTd[i]).text();
                if (val2 == val1) {

                    $(allTd[i]).addClass('special-days');
                }
            }
        }
    }
}

function saveTime() {
    var array = [];
    var allInput = $('#content table input');
    for (var i = 0; i < allInput.length; i++) {
        var value = $(allInput[i]).val();
        array.push(value);
    }
    var date1 = $("#datetimepicker1 input").val();
    var date2 = $("#datetimepicker2 input").val();
    var gtime = {gtime: array, date1: date1, date2: date2};
    localStorage.setItem('gtime', JSON.stringify(gtime));
}

function dataToGTimeDetail(href, pdata) {
    var datels = JSON.parse(localStorage[pdata]);
    var date = datels['date'];
    var time = datels['starttime'] + "-" + datels['endtime'];
    var gTimeDetail = null;
    if (localStorage['gtimedetails'] === undefined) {
        gTimeDetail = {}
    }
    else {
        gTimeDetail = JSON.parse(localStorage['gtimedetails']);
    }
    if (gTimeDetail[date] === undefined) {
        gTimeDetail[date] = [];
    }
    if ($.inArray(time, gTimeDetail[date]) === -1) {
        gTimeDetail[date].push(time);
    }
    localStorage.setItem("gtimedetails", JSON.stringify(gTimeDetail));
    console.log(gTimeDetail);
    window.location.href = href;
}

function busytime(date, time, time2) {
    return date + ' ' + time + '-' + time2;
}

function AjaxSend(data, success, errors) {
    var _urlA = window.location.href;
    var apiUrl = {}
    if (_urlA.indexOf("http://127.0.0.1:8080") >= 0) {
        apiUrl = {
            api: 'http://spmsapi.1024web.cn/'
        }
    } else if (_urlA.indexOf("1024web.cn") >= 0) {
        apiUrl = {
            api: 'http://spmsapi.1024web.cn/'
        }
    } else if (_urlA.indexOf("http://localhost:8080") >= 0) {
        apiUrl = {
            api: 'http://spmsapi.1024web.cn/'
        }
    }
    $.ajax({
        type: 'post',
        url: apiUrl.api + data._cmd,
        dataType: 'json',
        data: data,
        success: function (da) {
            if (da.status == "1") {
                success(da);
            } else if (da.status == "0") {
                if (da.info && da.info.indexOf("SQL") >= 0) {
                    errors('Failed');
                    return;
                } else {
                    errors(da.info);
                }
            }
            else if (da.status == "2") {

            }

        }
    })
}