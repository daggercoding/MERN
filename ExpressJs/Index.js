const express =require("express")

const cors = require("cors")

const router = require("./Routes/movieRoute")

const app = express();
app.use(express.json())
app.use(cors())
app.use("/api/movies",router)

module.exports=app
