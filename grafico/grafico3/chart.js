google.charts.load('current',{packages:['corechart']});
google.charts.setOnLoadCallback(desenharGrafico);

function desenharGrafico(){

    var dados = google.visualization.arrayToDataTable([
        ['Jogadores', 'Gols'],
        ['CR7', 877],
        ['Messi', 750],
        ['Neymar', 550]
        
    ]);

    var opcoes = {
        title: 'Artilheiros'
    };

    var chart = new google.visualization.ColumnChart(document.getElementById('grafico'));
    chart.draw(dados, opcoes);
}