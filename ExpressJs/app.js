const express =require("express")
const fs = require("fs")
const cors = require("cors")

const app = express();
app.use(express.json())
app.use(cors())
let movies=JSON.parse(fs.readFileSync("./data/Movies.json", 'utf-8'))

app.get("/",(req,res)=>
{
    res.status(200).send("welcome to home page")
})

app.get("/api/movies",(req,res)=>
[
    res.status(200).json({
        status:"sucess",
        count:movies.length,
        data:{
            movies:movies
        }
    })
])

app.post("/api/movies",(req,res)=>
{
    console.log(req.body)
    let newId = movies[movies.length-1].id+1;
    let newMovie = Object.assign({id:newId},req.body)
    movies.push(newMovie)
    
    fs.writeFile("./data/Movies.json",JSON.stringify(movies),(err)=>{
        res.status(201).send("sucessfully created")
    })

})

app.listen(8000,()=>
{
    console.log("server is up...(:")
})