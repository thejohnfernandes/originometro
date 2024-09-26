const { OpenAI } = require('openai');
const openai = new OpenAI({
    key: process.env.OPENAI_API_KEY,
});



// Função para analisar a resposta com a API da OpenAI
exports.analisarResposta = async (resposta) => {
    try {
        var textoOrigines = "agora nos cabe refutar suas palavras, que são: 'Nem um deus, ó judeus e cristãos, nem um filho de Deus jamais desceu ou pode descer ao mundo. Mas se vocês falam de não sei quais anjos, a quem vocês chamam assim, deuses ou algum outro tipo de seres? A outro tipo de seres, ao que parece, aos demônios'. Celso aqui se repete, pois já disse muitas vezes o mesmo anteriormente (IV 2-23), e, portanto, não é necessário discutir extensivamente. Basta o que já dissemos sobre isso. No entanto, argumentaremos algo entre muitas coisas que poderiam ser ditas, que nos parece estar em concordância com o que foi dito antes, embora não seja exatamente o mesmo. Assim demonstraremos que, se Celso realmente sustenta de forma universal que nenhum deus ou filho de Deus jamais desceu aos homens, ele derruba o que as pessoas acreditam sobre a aparição de algum deus e o que ele mesmo disse antes (III 22-25). E é assim que, se Celso realmente diz, como um princípio universal, que nenhum deus ou filho de Deus desceu ou pode descer ao mundo, ele evidentemente derruba a tese de que há deuses na terra, que desceram do céu, seja para dar oráculos sobre o futuro aos homens, seja para curá-los por esses mesmos oráculos. Consequentemente, nem Apolo Pítio, nem Asclépio, nem qualquer outro deus que se acredita fazer tudo isso, seria um deus que desceu do céu; e, se é um deus, teria sido relegado a habitar a terra como uma espécie de fugitivo da mansão dos deuses. Seria como um miserável a quem não é permitido entrar na parte das coisas divinas que lá existem; ou, finalmente, nem Apolo nem Asclépio seriam deuses que se acredita fazerem algo na terra, mas seriam demônios muito inferiores aos homens sábios, que, por sua virtude, ascendem ao firmamento celeste (cf. Platão, Fedro 247b).";
         
        const completion = await openai.completions.create({
            model: "gpt-3.5-turbo-instruct",
             prompt: `Com base no texto de Orígenes, me retorne um numero de 0 a 10  qual é a proximidade da refutação com Orígenes? texto de origines:${textoOrigines} Refutação: ${resposta}`,
             max_tokens: 10,
         });
      
        const analise = completion.choices[0].text.trim();

        console.log(resposta, analise)

        const numeroExtraido = extrairNumero(analise);

        console.log(numeroExtraido)

        return numeroExtraido;

    } catch (error) {
        console.error('Erro ao chamar a API da OpenAI:', error);
        throw error;
    }
};


function extrairNumero(str) {
    const resultado = str.match(/\d+/);
    return resultado ? parseInt(resultado[0], 10) : null;
  }
