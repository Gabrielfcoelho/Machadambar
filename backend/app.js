const express = require("express")
const cors = require("cors")
const app = express()

/*class App {
    constructor() {
        this.server = express();
    }

    middleware() {
        this.server.use(express.json)
        this.server.use(cors())
    }
}*/

app.use(cors())

app.use(express.json())

//DB Connection
const conn = require("./db/conn")

conn()

//Routes
const routes = require("./routes/router")

app.use("/api", routes)

app.listen(3000, function() {
    console.log(`Servidor Online!`)
})

//export default new App().server
//7gyP3UiYTaP4O3zu