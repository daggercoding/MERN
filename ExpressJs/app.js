const express =require("express")
const fs = require("fs")
const cors = require("cors")
const router = require("./Routes/movieRoute")

const app = express();
app.use(express.json())
app.use(cors())

app.send(express.static("./public"))

app.use("/API/MOVIES",router)

module.exports = app
