document.addEventListener('DOMContentLoaded', function () {
    atualizarDados();
});


var chart = Highcharts.chart('container-gauge', {
    chart: {
        type: 'gauge',
        backgroundColor: 'transparent' // Fundo do gráfico transparente
    },
    credits: {
        enabled: true,
        text: "@opropriojohn"
    },
    accessibility: { enabled: false },
    title: null
    ,
       pane: {
        center: ['50%', '85%'],
        size: '140%',
        startAngle: -90,
        endAngle: 90,
        background: [{ 
            // Primeira camada (fundo do gauge)
            backgroundColor: {
                linearGradient: { x1: 0, y1: 0, x2: 1, y2: 0 },
                stops: [
                    [0, '#0000FF'], // Azul
                    [0.5, '#FFCC00'], // Amarelo no meio
                    [1, '#FF4500']  // Vermelho
                ]
            },
            innerRadius: '60%',
            outerRadius: '100%',
            shape: 'arc'
        }]
    },
    yAxis: {
        min: 0,
        max: 10,
     tickPositions: [0, 1, 2, 3, 4, 5,  6, 7, 8, 9, 10],
        tickAmount: 11, // Número de divisões no eixo
        stops: [
            [0.3, '#00f'], // Azul até 30%
            [0.7, '#ffcc00'], // Amarelo até 70%
            [1, '#ff4500']   // Vermelho até o final
        ],
        lineWidth: 0,
        tickWidth: 2, // Largura dos ticks (marcadores de número)
        minorTickInterval: null,
        labels: {
            distance: -25, // Posição dos números
            style: {
                color: '#14171a', // Cor do texto dos números
                fontSize: '14px'
            }
        }
    },
    plotOptions: {
        gauge: {
            dataLabels: {
                y: 5,
                borderWidth: 0,
                useHTML: true
            }
        }
    },
    series: [{
        name: 'Proximidade Média',
        data: [0],
        dataLabels: {
            format: '<div style="text-align:center"><span style="font-size:25px">{y}</span><br/>' +
                '<span style="font-size:12px;opacity:0.4">Proximidade</span></div>'
        },
        tooltip: {
            valueSuffix: '°O'
        }
    }]
});


       // Função para atualizar os dados das refutações e o gauge de proximidade média
function atualizarDados() {

    fetch('/api/refutacoes', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao buscar refutações, status: ' + response.status);
            }
            return response.json(); // Converte a resposta para JSON
        })
        .then(data => {
            const refutacoes = data.refutacoes;
    
            if (!refutacoes || refutacoes.length === 0) {
                console.error('Nenhuma refutação encontrada');
                return;
            }
    
            // Calcula a média de proximidade
            const totalProximidade = refutacoes.reduce((acc, el) => acc + el.proximidade, 0);
            const mediaProximidade = totalProximidade / refutacoes.length;
    
            // Atualiza o gauge com a média de proximidade
            chart.series[0].points[0].update(mediaProximidade);
    
            // Atualiza a área das refutações
            const container = document.getElementById('refutacoes-container');
            container.innerHTML = ''; // Limpa o conteúdo atual

            
            generateAllRefutacoes(refutacoes, container);
            // generateRefutacaoCard(refutacoes[0], container)

            function wait(ms) {
                return new Promise(resolve => setTimeout(resolve, ms));
            }
            
            // Função assíncrona para gerar os cards com um intervalo de 1 segundo entre eles
            async function generateAllRefutacoes(refutacoes, container) {
                for (let i = 0; i < refutacoes.length; i++) {
                    generateRefutacaoCard(refutacoes[i], container);
                    await wait(1000); // Espera 1 segundo antes de gerar o próximo card
                    console.log(`Esperou 1 segundo após gerar o card ${i + 1}`);
                }
            }

        })
        .catch(error => {
            console.error('Erro ao buscar refutações:', error);
        });
    
    async function generateRefutacaoCard(refutacao, container) {
        var refutacaoId = `gauge-container-${refutacao.id}`;
    
        var cardHtml = `<div class="col-md-4 mb-4">
            <div class="card" style="width: 100%;">
                <div id="${refutacaoId}" class="card-img-top"></div>
                <div class="card-body">
                    <p class="card-text">${refutacao.refutacao}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"><b>Análise IA:</b> ${refutacao.justificativa}</li>
                </ul>
            </div>
        </div>`;
    
        container.innerHTML += cardHtml;
    
        // Cria o gráfico de proximidade no lugar da imagem
        var chart = Highcharts.chart(refutacaoId, {
            chart: {
                type: 'gauge',
                backgroundColor: 'transparent', // Fundo do gráfico transparente
            },
            credits: {
                enabled: true,
                text: "@opropriojohn",
            },
            accessibility: { enabled: false },
            title: null,
            pane: {
                center: ['50%', '85%'],
                size: '140%',
                startAngle: -90,
                endAngle: 90,
                background: [{ 
                    // Primeira camada (fundo do gauge)
                    backgroundColor: {
                        linearGradient: { x1: 0, y1: 0, x2: 1, y2: 0 },
                        stops: [
                            [0, '#0000FF'], // Azul
                            [0.5, '#FFCC00'], // Amarelo no meio
                            [1, '#FF4500'],  // Vermelho
                        ],
                    },
                    innerRadius: '60%',
                    outerRadius: '100%',
                    shape: 'arc',
                }],
            },
            yAxis: {
                min: 0,
                max: 10,
                tickPositions: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                tickAmount: 11, // Número de divisões no eixo
                stops: [
                    [0.3, '#00f'], // Azul até 30%
                    [0.7, '#ffcc00'], // Amarelo até 70%
                    [1, '#ff4500'],  // Vermelho até o final
                ],
                lineWidth: 0,
                tickWidth: 2, // Largura dos ticks (marcadores de número)
                minorTickInterval: null,
                labels: {
                    distance: -25, // Posição dos números
                    style: {
                        color: '#14171a', // Cor do texto dos números
                        fontSize: '14px',
                    },
                },
            },
            plotOptions: {
                gauge: {
                    dial: {
                        radius: '100%', // Define o tamanho do ponteiro
                        backgroundColor: '#14171a', // Cor do ponteiro
                        borderColor: '#000',
                        borderWidth: 1,
                        baseWidth: 5, // Largura da base do ponteiro
                        topWidth: 1, // Largura da ponta do ponteiro
                    },
                    pivot: {
                        backgroundColor: '#14171a', // Cor do pivô central
                        radius: 6, // Tamanho do pivô central
                    },
                },
            },
            series: [{
                name: 'Proximidade',
                data: [refutacao.proximidade], // Valor que define a posição do ponteiro
                dataLabels: {
                    format: '<div style="text-align:center"><span style="font-size:25px">{y}</span><br/>' +
                        '<span style="font-size:12px;opacity:0.4">Proximidade</span></div>',
                },
                tooltip: {
                    valueSuffix: '°O',
                },
            }],
        });

        chart.redraw();

       
    }
    
    
}
