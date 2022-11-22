google.charts.load('current',{packages:['corechart']});
google.charts.setOnLoadCallback(desenharGrafico);

function desenharGrafico(){

    var dados = google.visualization.arrayToDataTable([
        ['Celulares', 'Vendas'],
        ['Iphone 13', 125],
        ['Iphone 11', 65],
        ['Samsung s22', 47],
        ['Samsung Galaxy A12', 80],
        ['Xiaomi Redmi Note 11', 140],
        ['Moto G 22', 67]
    ]);

    var opcoes = {
        title: 'Celulares mais vendidos em 2022',
        colors: ['yellow']
    };

    var chart = new google.visualization.ColumnChart(document.getElementById('grafico'));
    chart.draw(dados, opcoes);
}