const express =require("express")
const cors = require("cors")
require('dotenv').config()
const router = require("./Routes/movieRoute")

const app = express();
app.use(express.json())
app.use(express.static("./public"))
app.use(cors())

app.use("/API/MOVIES",router)

module.exports = app
