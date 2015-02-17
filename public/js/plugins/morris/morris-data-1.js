$(function() {

    // Line Chart Demo data!!!!!!!!!
    Morris.Line({
        // ID of the element in which to draw the chart.
        element: 'moisture-line-chart',
        // Chart data records -- each entry in this array corresponds to a point on
        // the chart.
        data: [{d:1417622412291,inlet:25.80,outlet:13.53},{d:1417622472291,inlet:25.47,outlet:13.17},{d:1417622532291,inlet:25.08,outlet:12.94},{d:1417622592291,inlet:24.19,outlet:12.81},{d:1417622652291,inlet:23.92,outlet:12.73},{d:1417622712291,inlet:24.25,outlet:12.76},{d:1417622772291,inlet:23.40,outlet:12.35},{d:1417622832291,inlet:22.50,outlet:12.16},{d:1417622892291,inlet:22.75,outlet:11.96},{d:1417622952291,inlet:22.21,outlet:12.26},{d:1417623012291,inlet:22.07,outlet:12.37},{d:1417623072291,inlet:21.71,outlet:12.15},{d:1417623132291,inlet:21.06,outlet:11.75},{d:1417623192291,inlet:21.99,outlet:11.45},{d:1417623252291,inlet:21.23,outlet:11.09},{d:1417623312291,inlet:21.80,outlet:10.84},{d:1417623372291,inlet:21.42,outlet:10.41},{d:1417623432291,inlet:20.87,outlet:10.15},{d:1417623492291,inlet:21.55,outlet:10.20},{d:1417623552291,inlet:21.17,outlet:9.80},{d:1417623612291,inlet:20.77,outlet:9.67},{d:1417623672291,inlet:20.33,outlet:9.30},{d:1417623732291,inlet:20.98,outlet:8.89},{d:1417623792291,inlet:21.50,outlet:9.13},{d:1417623852291,inlet:22.50,outlet:8.90},{d:1417623912291,inlet:22.21,outlet:9.28},{d:1417623972291,inlet:21.31,outlet:9.27},{d:1417624032291,inlet:21.80,outlet:9.46},{d:1417624092291,inlet:22.33,outlet:9.92},{d:1417624152291,inlet:21.53,outlet:9.86},{d:1417624212291,inlet:20.93,outlet:9.71},{d:1417624272291,inlet:21.53,outlet:9.29},{d:1417624332291,inlet:21.45,outlet:8.95},{d:1417624392291,inlet:22.14,outlet:8.53},{d:1417624452291,inlet:22.09,outlet:8.05},{d:1417624512291,inlet:22.93,outlet:7.68},{d:1417624572291,inlet:23.52,outlet:7.80},{d:1417624632291,inlet:24.16,outlet:7.87},{d:1417624692291,inlet:23.54,outlet:7.74},{d:1417624752291,inlet:23.20,outlet:7.34},{d:1417624812291,inlet:22.79,outlet:7.22},{d:1417624872291,inlet:22.80,outlet:6.76},{d:1417624932291,inlet:23.51,outlet:7.25},{d:1417624992291,inlet:22.54,outlet:7.70},{d:1417625052291,inlet:22.99,outlet:7.36},{d:1417625112291,inlet:23.48,outlet:7.40},{d:1417625172291,inlet:23.55,outlet:7.80},{d:1417625232291,inlet:23.04,outlet:7.80},{d:1417625292291,inlet:23.78,outlet:7.69},{d:1417625352291,inlet:22.98,outlet:7.31},{d:1417625412291,inlet:22.94,outlet:7.71},{d:1417625472291,inlet:23.73,outlet:7.95},{d:1417625532291,inlet:23.53,outlet:7.92},{d:1417625592291,inlet:24.50,outlet:7.67},{d:1417625652291,inlet:24.82,outlet:7.79},{d:1417625712291,inlet:24.44,outlet:7.99},{d:1417625772291,inlet:25.34,outlet:7.80},{d:1417625832291,inlet:24.89,outlet:8.09},{d:1417625892291,inlet:24.12,outlet:7.89},{d:1417625952291,inlet:23.64,outlet:7.66},{d:1417626012291,inlet:24.34,outlet:7.98},{d:1417626072291,inlet:25.11,outlet:8.35},{d:1417626132291,inlet:25.41,outlet:8.44},{d:1417626192291,inlet:25.25,outlet:8.36},{d:1417626252291,inlet:24.30,outlet:8.20},{d:1417626312291,inlet:23.39,outlet:8.47},{d:1417626372291,inlet:23.33,outlet:8.89},{d:1417626432291,inlet:23.27,outlet:8.66},{d:1417626492291,inlet:23.11,outlet:8.54},{d:1417626552291,inlet:22.90,outlet:8.13},{d:1417626612291,inlet:23.62,outlet:8.20},{d:1417626672291,inlet:23.68,outlet:8.47},{d:1417626732291,inlet:23.73,outlet:8.80},{d:1417626792291,inlet:24.62,outlet:9.11},{d:1417626852291,inlet:24.06,outlet:8.95},{d:1417626912291,inlet:24.89,outlet:9.20},{d:1417626972291,inlet:24.96,outlet:9.05},{d:1417627032291,inlet:25.83,outlet:9.43},{d:1417627092291,inlet:25.62,outlet:9.36},{d:1417627152291,inlet:26.42,outlet:8.87},{d:1417627212291,inlet:26.03,outlet:8.97},{d:1417627272291,inlet:26.59,outlet:8.72},{d:1417627332291,inlet:25.64,outlet:9.00},{d:1417627392291,inlet:25.39,outlet:9.34},{d:1417627452291,inlet:25.10,outlet:9.44},{d:1417627512291,inlet:25.10,outlet:8.96},{d:1417627572291,inlet:25.05,outlet:9.36},{d:1417627632291,inlet:25.99,outlet:9.34},{d:1417627692291,inlet:25.93,outlet:9.20},{d:1417627752291,inlet:25.29,outlet:9.13},{d:1417627812291,inlet:25.28,outlet:8.69},{d:1417627872291,inlet:25.61,outlet:8.21},{d:1417627932291,inlet:24.75,outlet:8.00},{d:1417627992291,inlet:25.53,outlet:8.08},{d:1417628052291,inlet:25.88,outlet:8.04},{d:1417628112291,inlet:26.28,outlet:7.98},{d:1417628172291,inlet:26.72,outlet:8.40},{d:1417628232291,inlet:25.97,outlet:8.68},{d:1417628292291,inlet:25.59,outlet:9.00},{d:1417628352291,inlet:25.94,outlet:8.84},{d:1417628412291,inlet:24.96,outlet:8.84},{d:1417628472291,inlet:25.13,outlet:8.59},{d:1417628532291,inlet:25.30,outlet:8.63},{d:1417628592291,inlet:24.87,outlet:8.57},{d:1417628652291,inlet:25.77,outlet:8.99},{d:1417628712291,inlet:24.95,outlet:9.17},{d:1417628772291,inlet:24.69,outlet:9.04},{d:1417628832291,inlet:24.54,outlet:9.26},{d:1417628892291,inlet:24.82,outlet:9.34},{d:1417628952291,inlet:24.41,outlet:8.89},{d:1417629012291,inlet:24.72,outlet:9.24},{d:1417629072291,inlet:24.03,outlet:9.39},{d:1417629132291,inlet:23.15,outlet:9.34},{d:1417629192291,inlet:22.18,outlet:9.27},{d:1417629252291,inlet:21.90,outlet:9.38},{d:1417629312291,inlet:22.19,outlet:9.62},{d:1417629372291,inlet:22.26,outlet:9.19},{d:1417629432291,inlet:22.47,outlet:9.56},{d:1417629492291,inlet:22.14,outlet:9.09},{d:1417629552291,inlet:23.00,outlet:9.41},],
        // The name of the data record attribute that contains x-visitss.
        xkey: 'd',
        // A list of names of data record attributes that contain y-visitss.
        ykeys: ['inlet','outlet'],
        // Labels for the ykeys -- will be displayed when you hover over the
        // chart.
        labels: ['Inlet','Outlet'],
        lineColors: ['#5cb85c','#428bca'],
        // Disables line smoothing
        smooth: false,
       // behaveLikeLine: true,
        pointSize: 1,
        resize: true
    });

    Morris.Line({
        element: 'rate-line-chart',
        data: [{d:1417622625328,rate:14.50},{d:1417622685328,rate:14.50},{d:1417622745328,rate:14.50},{d:1417622805328,rate:14.50},{d:1417622865328,rate:14.50},{d:1417622925328,rate:14.50},{d:1417622985328,rate:14.50},{d:1417623045328,rate:14.50},{d:1417623105328,rate:14.50},{d:1417623165328,rate:14.50},{d:1417623225328,rate:14.50},{d:1417623285328,rate:14.50},{d:1417623345328,rate:14.50},{d:1417623405328,rate:14.50},{d:1417623465328,rate:14.50},{d:1417623525328,rate:14.50},{d:1417623585328,rate:14.50},{d:1417623645328,rate:14.50},{d:1417623705328,rate:14.50},{d:1417623765328,rate:14.50},{d:1417623825328,rate:14.50},{d:1417623885328,rate:14.50},{d:1417623945328,rate:14.50},{d:1417624005328,rate:14.50},{d:1417624065328,rate:14.50},{d:1417624125328,rate:14.50},{d:1417624185328,rate:14.50},{d:1417624245328,rate:14.11},{d:1417624305328,rate:14.11},{d:1417624365328,rate:14.11},{d:1417624425328,rate:14.11},{d:1417624485328,rate:14.11},{d:1417624545328,rate:14.11},{d:1417624605328,rate:14.14},{d:1417624665328,rate:14.14},{d:1417624725328,rate:14.14},{d:1417624785328,rate:14.14},{d:1417624845328,rate:14.14},{d:1417624905328,rate:14.14},{d:1417624965328,rate:14.14},{d:1417625025328,rate:14.14},{d:1417625085328,rate:14.42},{d:1417625145328,rate:14.42},{d:1417625205328,rate:14.48},{d:1417625265328,rate:14.48},{d:1417625325328,rate:14.48},{d:1417625385328,rate:14.48},{d:1417625445328,rate:14.48},{d:1417625505328,rate:14.48},{d:1417625565328,rate:14.48},{d:1417625625328,rate:14.48},{d:1417625685328,rate:14.48},{d:1417625745328,rate:14.48},{d:1417625805328,rate:14.48},{d:1417625865328,rate:14.48},{d:1417625925328,rate:14.48},{d:1417625985328,rate:14.48},{d:1417626045328,rate:14.48},{d:1417626105328,rate:14.48},{d:1417626165328,rate:14.48},{d:1417626225328,rate:14.48},{d:1417626285328,rate:14.48},{d:1417626345328,rate:14.48},{d:1417626405328,rate:14.48},{d:1417626465328,rate:14.48},{d:1417626525328,rate:14.48},{d:1417626585328,rate:14.48},{d:1417626645328,rate:14.18},{d:1417626705328,rate:14.18},{d:1417626765328,rate:14.18},{d:1417626825328,rate:14.18},{d:1417626885328,rate:14.18},{d:1417626945328,rate:14.18},{d:1417627005328,rate:14.18},{d:1417627065328,rate:14.18},{d:1417627125328,rate:14.18},{d:1417627185328,rate:14.18},{d:1417627245328,rate:14.42},{d:1417627305328,rate:14.42},{d:1417627365328,rate:14.42},{d:1417627425328,rate:14.42},{d:1417627485328,rate:14.42},{d:1417627545328,rate:14.42},{d:1417627605328,rate:14.42},{d:1417627665328,rate:14.42},{d:1417627725328,rate:14.42},{d:1417627785328,rate:14.42},{d:1417627845328,rate:14.42},{d:1417627905328,rate:14.42},{d:1417627965328,rate:14.42},{d:1417628025328,rate:14.58},{d:1417628085328,rate:14.58},{d:1417628145328,rate:14.58},{d:1417628205328,rate:14.58},{d:1417628265328,rate:14.58},{d:1417628325328,rate:14.58},{d:1417628385328,rate:14.58},{d:1417628445328,rate:14.58},{d:1417628505328,rate:14.58},{d:1417628565328,rate:14.58},{d:1417628625328,rate:14.58},{d:1417628685328,rate:14.58},{d:1417628745328,rate:14.58},{d:1417628805328,rate:14.72},{d:1417628865328,rate:14.72},{d:1417628925328,rate:14.72},{d:1417628985328,rate:14.72},{d:1417629045328,rate:14.72},{d:1417629105328,rate:14.72},{d:1417629165328,rate:14.72},{d:1417629225328,rate:14.72},{d:1417629285328,rate:14.72},{d:1417629345328,rate:14.72},{d:1417629405328,rate:14.72},{d:1417629465328,rate:15.19},{d:1417629525328,rate:15.19},{d:1417629585328,rate:15.19},{d:1417629645328,rate:15.19},{d:1417629705328,rate:15.19},{d:1417629765328,rate:15.19},],
        xkey: 'd',
        ykeys: ['rate'],
        labels: ['Discharge Rate'],
        lineColors: ['#f0ad4e'],
        smooth: false,
        pointSize: 1,
        resize: true
    });

});