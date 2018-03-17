var bar_option = {
    backgroundColor: '#1D2338',
    title:
        {
            text: '',
        }
    ,
    grid: {
        bottom: 40,
        left: 50,
        right: 50,
        top: 10
    },
    tooltip: {
        trigger: 'axis'
    }
    ,
    legend: {}
    ,
    toolbox: {
        show: true,
        feature:
            {
                saveAsImage: {
                    show: true
                }
            }
    }
    ,
    label: {
        normal: {
            show: true,
            position: 'bottom',
            interval: 0,
            rotate: 40

        }
    },
    calculable: true,
    xAxis:
        [
            {
                type: 'category',
                axisLabel: {
                    textStyle: {color: '#0294F2'},
                    interval: 0,
                    rotate: 40
                },
                data: [4740, 4741, 4742, 4743, 4744, 4745, 4746, 4747]
            }
        ],
    yAxis:
        [
            {
                type: 'value',
                axisLabel: {
                    textStyle: {color: '#0294F2'},
                },
                splitLine: {
                    lineStyle: {
                        color: '#3B3E4B'
                    }
                },
                min: -200,
                max: 0,
            }
        ],
    series:
        [
            {
                name: 'Forecast PCH utilization',
                type: 'bar',
                barWidth: 18,
                data: [-102.5, -102.5, -102.5, -102.5, -102.5, -102.5, -102.5, -102.5, -102.5, -102.5],
                itemStyle: {
                    normal: {
                        color: '#33A6FF',
                        barBorderRadius: [5, 5, 5, 5],
                    }
                }
            },
            {
                name: 'Forecast FACH utilization',
                type: 'bar',
                barWidth: 18,
                barCategoryGap: '50%',
                data: [-102.5, -102.5, -102.5, -102.5, -102.5, -102.5, -102.5, -102.5, -102.5, -102.5],
                itemStyle: {
                    normal: {
                        color: '#F7CA53',
                        barBorderRadius: [5, 5, 5, 5],
                    }
                }
            }
        ]
};

var bar_option2 = {
    backgroundColor: '#1D2338',
    title:
        {
            text: '',
        }
    ,
    grid: {
        bottom: 40,
        left: 50,
        right: 50,
        top: 10
    },
    tooltip: {
        trigger: 'axis'
    }
    ,
    legend: {}
    ,
    toolbox: {
        show: true,
        feature:
            {
                saveAsImage: {
                    show: true
                }
            }
    }
    ,
    label: {
        normal: {
            show: true,
            position: 'top',
            interval: 0,
            rotate: 40

        }
    },
    calculable: true,
    xAxis:
        [
            {
                type: 'category',
                axisLabel: {
                    textStyle: {color: '#0294F2'},
                    interval: 0,
                    rotate: 40
                },
                data: [12565, 12566, 12567, 12568, 12576, 31491, 31492, 31493, 31521, 31522]
            }
        ],
    yAxis:
        [
            {
                type: 'value',
                axisLabel: {
                    textStyle: {color: '#0294F2'},
                },
                splitLine: {
                    lineStyle: {
                        color: '#3B3E4B'
                    }
                },
                min: 0,
                max: 20,
            }
        ],
    series:
        [
            {
                name: 'Forecast PCH utilization',
                type: 'bar',
                barWidth: 18,
                data: [8.3, 8.3, 8.3, 8.2, 8.1, 8.3, 8.3, 8.2, 8.1, 8.3],
                itemStyle: {
                    normal: {
                        color: '#33A6FF',
                        barBorderRadius: [5, 5, 5, 5],
                    }
                }
            },
            {
                name: 'Forecast FACH utilization',
                type: 'bar',
                barWidth: 18,
                barCategoryGap: '50%',
                data: [0.6, 3.4, 4.6, 0.2, 0.8, 1.1, 10.4, 0.6, 9.3, 3.7],
                itemStyle: {
                    normal: {
                        color: '#F7CA53',
                        barBorderRadius: [5, 5, 5, 5],
                    }
                }
            }
        ]
};
