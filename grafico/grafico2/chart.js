google.charts.load('current',{packages:['corechart']});
google.charts.setOnLoadCallback(desenharGrafico);

function desenharGrafico(){

    var dados = google.visualization.arrayToDataTable([
        ['Empresas', 'Acessos'],
        ['Shopee', 257],
        ['Mercado  Livre', 175],
        ['Amazon', 113],
        ['Americanas', 87],
        ['Magalu', 83],
        ['AliExpress', 69],
        ['Casas Bahia', 41],
        ['Outras', 25]
        
    ]);

    var opcoes = {
        title: 'Empresas mais acessadas em 2022',
        is3D:true,
        colors: ['#202020', '#000', 'lightblue', '#f3b49f', '#f6c7b6', '#893736', '#873674', '#d3d3d3']
    };

    var chart = new google.visualization.PieChart(document.getElementById('grafico'));
    chart.draw(dados, opcoes);
}