const { Cardapio: CardapioModel } = require("../models/Cardapio")

const cardapioController = {

    create: async(req,res) => {
        try {
            const cardapio = {
                nome: req.body.nome,
                descricao: req.body.descricao,
                preco: req.body.preco,
                foto: req.body.foto,
            }

            const response = await CardapioModel.create(cardapio)

            res.status(201).json({response, msg:"Serviço criado com sucesso!" })

        } catch (error){
            console.log(error)
        }
    }
}

module.exports = cardapioController