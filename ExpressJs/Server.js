// const dotenv = require("dotenv")
// dotenv.config()

const app = require("./app")

const port = process.env.PORT || 8000
console.log(port)

app.listen(port,()=>
{
    console.log("server is up.....(:")
})