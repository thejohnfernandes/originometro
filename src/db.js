const { Pool } = require('pg');

let pool;

async function connect() {
    // Verifica se a conexão já foi estabelecida
    if (!pool) {
        pool = new Pool({
            connectionString: process.env.CONNECTION_STRING
        });
        console.log("Criou pool de conexões no PostgreSQL!");
    }
    
    // Retorna o pool para usar a conexão
    return pool;
}

// Função para encerrar o pool ao finalizar o processo
async function shutdown() {
    // if (pool) {
    //     await pool.end();
    //     console.log('Pool de conexões do PostgreSQL encerrado.');
    // }
}


module.exports = { connect, shutdown };