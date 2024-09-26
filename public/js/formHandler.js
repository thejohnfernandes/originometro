// Função para gerar mensagens de agradecimento aleatórias
function getRandomThankYou() {
    const thankYous = [
        "Obrigado por dar um Ctrl+Alt+Del nas ideias de Celso! 🤓",
        "Celso saiu para comprar argumentos melhores e nunca mais voltou, graças a você! 🏃‍♂️💨",
        "Valeu por não deixar Celso passar com essa! Juntos somos mais fortes. 💪😂",
        "Celso está revirando nos argumentos, e é tudo culpa sua! Obrigado! 🤣",
        "Se Celso tivesse Twitter, ele definitivamente teria te bloqueado agora. 😆🚫",
        "Adeus, argumentos de Celso. Olá, sabedoria! Obrigado por escolher o lado certo da história! 📚✨",
        "Você acabou de ser promovido a herói anti-Celso! Parabéns e obrigado! 🎉🎖",
        "Quem diria que Celso seria cancelado no Twitter? Você fez isso acontecer! 🐦🚫",
        "Celso atualizando seu status para 'confuso e derrotado' graças a você! 🤯🏆"
    ];
    const index = Math.floor(Math.random() * thankYous.length);
    return thankYous[index];
}

// Função para lidar com o envio do formulário
document.getElementById('responseForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o comportamento padrão do formulário

    const resposta = document.getElementById('question').value;
    document.getElementById('formContraCelso').innerHTML = "";

    document.getElementById('loading').style.display = 'block';

    // Enviar a resposta ao servidor
    fetch('/api/enviar-resposta', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ resposta }),
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('loading').style.display = 'none';

        const thankYouDiv = document.getElementById('thankYouMessage');
        thankYouDiv.innerHTML = `<div class="alert alert-success mt-3" role="alert">
          ${getRandomThankYou()} </div>`;
        thankYouDiv.style.display = 'block';
      })
    .catch(error => {
        console.error('Erro ao enviar resposta:', error);
    });
});