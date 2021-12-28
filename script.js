$(".spiderChart").highcharts({
    chart: {
        polar: true,
        type: "line",
        style: {
            fontFamily: "Tahoma, serif", // default font
            fontSize: "14px",
        },
    },

    colors: ["#0067ac", "#a02842", "#007680"],

    title: {
        text: "Software Development Skills",
        x: -80,
    },

    pane: {
        size: "80%",
    },

    xAxis: {
        categories: ["HTML", "CSS", "JavaScript", "ReactJS", "React Native", "NodeJS", "MongoDB"],
        tickmarkPlacement: "on",
        lineWidth: 0,
    },

    yAxis: {
        gridLineInterpolation: "polygon",
        lineWidth: 0,
        min: 0,
        max: 100,
        tickInterval: 10,
    },

    tooltip: {
        shared: true,
        pointFormat: '<span style="color:{series.color}"> <b>{point.y:,.0f}%</b><br/>',
    },

    legend: {
        enabled: false,
    },

    series: [
        {
            data: [95, 85, 60, 20, 20, 20, 10],
            pointPlacement: "on",
        },
    ],
});
