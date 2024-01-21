const router = require("express").Router()

const cardapioController = require("../controllers/cardapioController")

//Funções
router.route("/cardapios").post((req,res) => cardapioController.create(req,res));

module.exports = router