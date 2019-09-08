// based on prepared DOM, initialize echarts instance
var myChart = echarts.init(document.getElementById('totalIncome'));

// specify chart configuration item and data
var option = {
    grid: {
        left: '1.5%',
        right: '2%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        splitLine: {
            show: true,
            lineStyle: {
                color: '#f8f8fa'
            }
        },
        axisLine: {
            lineStyle: {
                color: '#f8f8fa'
            }
        },
        axisLabel: {
            color: '#21232b'
        },
        data: [0, 20, 40, 60, 80, 100, 120]
    },
    yAxis: {
        type: 'value',
        splitLine: {
            show: true,
            lineStyle: {
                color: '#f8f8fa'
            }
        },
        axisLine: {
            lineStyle: {
                color: '#f8f8fa'
            }
        },
        axisLabel: {
            color: '#21232b'
        }
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        symbolSize: 8,
        itemStyle: {
            color: '#3bca55'
        },
        lineStyle: {
            color: '#3bca55',
            width: 1
        },
        areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(59, 202, 85, 0.2)'
            }, {
                offset: 1,
                color: 'rgba(59, 202, 85, 0)'
            }])
        }
    }]
};

myChart.setOption(option);

window.onresize = function () {
    setTimeout(function () {
        myChart.resize();
    }, 200);
}
$('a[data-toggle="pill"]').on('shown.bs.tab', function (e) {
    var target = $(e.target).attr("href") 
    if ((target == '#pills-dinamic')) {
      myChart.resize();
      console.log('asdasd')
    }
});