const dotenv = require("dotenv")
const mongoose = require("mongoose")

dotenv.config()

const app = require("./app")
const port = process.env.PORT || 4000

//Establish Connection

mongoose.connect(process.env.DB_COLLECTION_STRING)
.then((data)=>console.log("Db connected"))
.catch((err)=>console.log("err occured in connection"))

app.listen(port,()=>
{
    console.log("server is up.....(:")
})