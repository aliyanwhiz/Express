const {readFileSync} = require('fs')
const http = require('http')

const server = http.createServer((req,res) => {
    const HomePage = readFileSync('./1-navbar-app/index.html')
    const Homestyle = readFileSync('./1-navbar-app/index.css')
    const Homelogo = readFileSync('./1-navbar-app/favicon.png')

    const url = req.url;

    if(url === '/')
    {
        console.log("user hits the server");
        res.writeHead(200,'text/html')
        res.write(HomePage)
        res.end();
    }
    else if(url === '/index.css')
    {
        console.log("user hits the server");
        res.writeHead(200,'text/css')
        res.write(Homestyle)
        res.end();
    }
    else if(url === '/favicon.png')
    {
        console.log("user hits the server");
        res.writeHead(200,'image/png')
        res.write(Homelogo)
        res.end();
    }
    else{
        console.log("user hits the server with bad request");
        res.writeHead(404,'text/html')
        res.write("<h1>page not found</h1>")
        res.end();    
    }
})

server.listen(5000,() => {
    console.log("the server is listening to port 5000...");
})