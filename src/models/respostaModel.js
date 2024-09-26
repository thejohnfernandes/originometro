// src/models/respostaModel.js
const { connect, shutdown } =  require('../db');

// Função para salvar a resposta no banco de dados
exports.salvarResposta = async (resposta) => {
    const client = await connect();
    const query = `INSERT INTO public.respostas_celso (resposta) VALUES ($1);`; // Uso de parâmetro para prevenir SQL Injection
    try {
        await client.query(query, [resposta]); // Passa a resposta como parâmetro
        return; // Retorna se necessário, por exemplo, o ID gerado
    } catch (error) {
        console.error('Erro ao executar a consulta no PostgreSQL:', error);
        throw error; // Repassa o erro para ser capturado no controlador
    } finally {
        shutdown(); // Libera o cliente de volta ao pool de conexões, em vez de encerrá-lo
    }
};


// Função para trazer as refitacpes
exports.refutacoes = async () => {
    const client = await connect(); // Conecta ao banco de dados
    const query = `SELECT * FROM refutacoes_origenes`; // Consulta para selecionar todos os dados da tabela

    try {
        const result = await client.query(query); // Executa a consulta
        return result.rows; // Retorna os dados da tabela (todas as linhas)
    } catch (error) {
        console.error('Erro ao executar a consulta no PostgreSQL:', error);
        throw error; // Repassa o erro para ser capturado no controlador
    } finally {
        shutdown(); // Libera o cliente de volta ao pool de conexões, em vez de encerrá-lo
    }
};

