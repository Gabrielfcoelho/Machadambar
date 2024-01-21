const mongoose = require("mongoose")

const{Schema} = mongoose

const cardapioSchema = new Schema({
        nome: {
            type: String,
            required: true,
        },
        descricao: {
            type: String,
            required: true,
        },
        preco: {
            type: Number,
            required: true,
        },
        foto: {
            type: String,
            required: true,
        },
    }, 
    {timestamps: true}
)

const Cardapio = mongoose.model("Cardapio", cardapioSchema)

module.exports = Cardapio
