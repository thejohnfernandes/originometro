const respostaModel = require('../models/respostaModel'); // Importando o model de resposta

exports.enviarResposta = async (req, res) => {
    const { resposta } = req.body;
    try {
        // Salva a resposta no banco de dados
        await respostaModel.salvarResposta(resposta);

        res.status(200).json({
            message: 'Resposta salva com sucesso!',
            analise: analiseGPT // Inclui a análise na resposta
        });
    } catch (error) {
        console.error('Erro ao salvar a resposta no banco de dados ou ao analisar:', error);
        res.status(500).json({
            message: 'Erro ao salvar a resposta ou realizar a análise.',
            error: {
                code: error.code,
                message: error.message,
                routine: error.routine,
                severity: error.severity
            }
        });
    }
};

exports.refutacoes = async (req, res) => {
    try {
        // Salva a resposta no banco de dados
        var refutacoes = await respostaModel.refutacoes();

        if(refutacoes.length > 0){
        
            res.status(200).json({
                message: 'Resposta salva com sucesso!',
                refutacoes: refutacoes
            });
        } else{
            res.status(204).send(); 
        }
    } catch (error) {
        console.error('Erro ao buscar as refutacoes no banco:', error);
        res.status(500).json({
            message: 'Erro ao salvar a resposta ou realizar a análise.',
            error: {
                code: error.code,
                message: error.message,
                routine: error.routine,
                severity: error.severity
            }
        });
    }
};
