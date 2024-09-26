// src/routes/respostaRoutes.js
const express = require('express');
const router = express.Router();
const respostaController = require('../controllers/respostaController');


// Rota POST para enviar a resposta
router.post('/enviar-resposta', respostaController.enviarResposta);
router.get('/refutacoes', respostaController.refutacoes);

module.exports = router;
