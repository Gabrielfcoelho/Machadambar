const router = require("express").Router()

//Cardapio router
const cardapioRouter = require("./cardapios")

router.use("/", cardapioRouter)

module.exports = router