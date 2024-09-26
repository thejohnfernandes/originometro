require('dotenv').config(); // Deve ser chamado primeiro

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const respostaRoutes = require('./routes/respostaRoutes'); // Importa as rotas

const app = express();

// Servir arquivos estáticos
app.use(express.static(path.join(__dirname, '../public')));

// Middleware para processar dados de formulários
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Usar as rotas definidas
app.use('/api', respostaRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
