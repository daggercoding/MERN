import http from "http"

const server = http.createServer((req,res)=>{
if(req.url==="/")
{
    res.end(`<h1>hello jii</h1>`)
}
else if(req.url==="/about")
{
    res.end(`<h1>ABOUT PAGE</h1>`)
}
else if(req.url==="/contact")
{
    res.end(`<h1>CONTACT PAGE</h1>`)
}
else{
    res.writeHead(404,"Bad",{"Content-Type":"text/html"})
    res.end("PAGE NOT FOUND")
}
})

server.listen(8080,()=>{
    console.log("server up!")
})