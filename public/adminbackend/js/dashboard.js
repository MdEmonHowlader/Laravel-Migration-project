"use strict"; Chart.plugins.unregister(ChartDataLabels); $('.js-chart').each(function () { $.HSCore.components.HSChartJS.init($(this)); }); var updatingChart = $.HSCore.components.HSChartJS.init($('#updatingData')); $(".earning-statistics").on("click", function () { earningStatisticsUpdate(this); }); function earningStatisticsUpdate(t) { let value = $(t).attr('data-earn-type'); let url = $('#earning-statistics-url').data('url'); $.ajax({ url: url, type: 'GET', data: { type: value }, beforeSend: function () { $('#loading').fadeIn(); }, success: function (response_data) { document.getElementById("updatingData").remove(); let graph = document.createElement('canvas'); graph.setAttribute("id", "updatingData"); document.getElementById("set-new-graph").appendChild(graph); var ctx = document.getElementById("updatingData").getContext("2d"); var options = { responsive: true, bezierCurve: false, maintainAspectRatio: false, scales: { xAxes: [{ gridLines: { color: "rgba(180, 208, 224, 0.5)", zeroLineColor: "rgba(180, 208, 224, 0.5)", } }], yAxes: [{ gridLines: { color: "rgba(180, 208, 224, 0.5)", zeroLineColor: "rgba(180, 208, 224, 0.5)", borderDash: [8, 4], } }] }, legend: { display: true, position: "top", labels: { usePointStyle: true, boxWidth: 6, fontColor: "#758590", fontSize: 14 } }, plugins: { datalabels: { display: false } }, }; var myChart = new Chart(ctx, { type: 'bar', data: { labels: [], datasets: [{ label: $('#in-house-text').data('text'), data: [], backgroundColor: "#ACDBAB", hoverBackgroundColor: "#ACDBAB", borderColor: "#ACDBAB", fill: false, lineTension: 0.3, radius: 0 }, { label: $('#seller-text').data('text'), data: [], backgroundColor: "#0177CD", hoverBackgroundColor: "#0177CD", borderColor: "#0177CD", fill: false, lineTension: 0.3, radius: 0 }, { label: $('#message-commission-text').data('text'), data: [], backgroundColor: "#FFB36D", hoverBackgroundColor: "FFB36D", borderColor: "#FFB36D", fill: false, lineTension: 0.3, radius: 0 }] }, options: options }); myChart.data.labels = response_data.inhouse_label; myChart.data.datasets[0].data = response_data.inhouse_earn; myChart.data.datasets[1].data = response_data.seller_earn; myChart.data.datasets[2].data = response_data.commission_earn; myChart.update(); }, complete: function () { $('#loading').fadeOut(); } }); }
$("#statistics_type").on("change", function () { let type = $(this).val(); let url = $('#order-status-url').data('url'); $.ajaxSetup({ headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') } }); $.post({ url: url, data: { statistics_type: type }, beforeSend: function () { $('#loading').fadeIn(); }, success: function (data) { $('#order_stats').html(data.view) }, complete: function () { $('#loading').fadeOut(); } }); }); $('#withdraw_method').on('change', function () { withdraw_method_field(this.value); }); try { var ctx = document.getElementById('business-overview'); var myChart = new Chart(ctx, { type: 'doughnut', data: { labels: ['$("#customer-text").data("text") ', '$("#store-text").data("text") ', '$("#product-text").data("text") ', '$("#order-text").data("text") ', '$("#brand-text").data("text") ',], datasets: [{ label: '$("#business-text").data("text")', data: ['$("#customers-text").data("text")', '$("#products-text").data("text")', '$("#orders-text").data("text")', '$("#brands-text").data("text")'], backgroundColor: ['#041562', '#DA1212', '#EEEEEE', '#11468F', '#000000',], hoverOffset: 4 }] }, options: { scales: { y: { beginAtZero: true } } } }); } catch (e) { }
$(function () { var ctx1 = $("#user_overview"); var data1 = { labels: ["Customer", "Seller", "Delivery Man"], datasets: [{ label: "User Overview", data: [88297, 34546, 15000], backgroundColor: ["#017EFA", "#51CBFF", "#56E7E7",], borderColor: ["#017EFA", "#51CBFF", "#56E7E7",], borderWidth: [1, 1, 1] }] }; var options = { responsive: true, legend: { display: true, position: "bottom", align: "start", maxWidth: 100, labels: { usePointStyle: true, boxWidth: 6, fontColor: "#758590", fontSize: 14 } }, plugins: { datalabels: { display: false } }, }; var chart1 = new Chart(ctx1, { type: "doughnut", data: data1, options: options }); }); $(function () { var ctx = $("#order_statictics"); var data = { labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], datasets: [{ label: "In-house", data: [10000, 50000, 100000, 140000, 40000, 10000, 50000, 100000, 130000, 40000, 80000, 120000], backgroundColor: "#FFB36D", borderColor: "#FFB36D", fill: false, lineTension: 0.3, radius: 2 }, { label: "Seller", data: [9000, 60000, 110000, 130000, 50000, 29000, 60000, 110000, 100000, 50000, 70000, 90000], backgroundColor: "#0177CD", borderColor: "#0177CD", fill: false, lineTension: 0.3, radius: 2 }] }; var options = { responsive: true, bezierCurve: false, maintainAspectRatio: false, scales: { xAxes: [{ gridLines: { color: "rgba(180, 208, 224, 0.5)", zeroLineColor: "rgba(180, 208, 224, 0.5)", } }], yAxes: [{ gridLines: { color: "rgba(180, 208, 224, 0.5)", zeroLineColor: "rgba(180, 208, 224, 0.5)", borderDash: [8, 4], } }] }, legend: { display: true, position: "top", labels: { usePointStyle: true, boxWidth: 6, fontColor: "#758590", fontSize: 14 } } }; var chart = new Chart(ctx, { type: "line", data: data, options: options }); });