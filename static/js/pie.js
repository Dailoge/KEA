
var pie_option = {
    backgroundColor: '#1D2338',
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)",

    },
    legend: {
        orient: 'vertical',
    },
    series: [
        {
            name: 'pie',
            type: 'pie',
            radius: ['35%', '70%'],
            color: ['#27c6a6', '#93c363', '#3199e8', '#ceaa4d'],
            label: {
                normal: {
                    formatter: '{b}\n{d}%'
                },
            },
            data: [
                {value: 435, name: 'HSPA'},
                {value: 679, name: 'Cell Update'},
                {value: 848, name: 'Compress Mode'},
                {value: 348, name: 'Other'},
                {value: 679, name: 'PSCALL'},
            ]
        }
    ]
};