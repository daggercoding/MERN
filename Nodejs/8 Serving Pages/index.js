import http from "http"
import fs from "fs"

const server = http.createServer((req,res)=>{
    if(req.url==="/")
    {
     fs.readFile("./public/Home.html",(err,data)=>{
        if(err)
        {
            throw err;
        }
        else{
            res.end(data)
        }
     })
    }
    else if(req.url==="/about")
    {
    fs.readFile("./Public/About.html",(err,data)=>{
        if(err)
        {
            throw err
        }
        else{
            res.end(data)
        }
    })
    }
    else{
        res.end("bab request")
    }
})

server.listen(8000,()=>console.log("running"))