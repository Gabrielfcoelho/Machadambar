const mongoose = require("mongoose")

async function main() {
    try{
        mongoose.set("strictQuery", true)
        await mongoose.connect("mongodb+srv://gabrielfcoelho:7gyP3UiYTaP4O3zu@orcfooddb.b7evjq0.mongodb.net/?retryWrites=true&w=majority")
        console.log("Conetado ao banco!")
    } catch (error) {
        console.log(`Erro:${error}`)
    }
}

module.exports = main