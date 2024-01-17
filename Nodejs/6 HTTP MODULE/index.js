import Http from "http"

//creating the server
const server = Http.createServer((req,res)=>{
    res.write("<h1>kaise ho vishal bhai</h1>")
})

//listening on port 8000
server.listen(8000,()=>{
    console.log("vishal singh is my name")
})