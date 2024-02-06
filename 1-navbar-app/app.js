const http = require('http')
const {readFileSync} = require('fs')

const HomePage = readFileSync('./1-navbar-app/index.html');
const Homestyle = readFileSync('./1-navbar-app/index.css');
const Homelogo = readFileSync('./1-navbar-app/favicon.png');

const server =  http.createServer((req, res) => {
    console.log("user hit the server");
    const url = req.url;
    if(url === '/')
    {
        res.writeHead(200, {"content-type": "text/html"})
        res.write(HomePage)
        res.end()
    }
    else if(url === '/index.css'){
        res.writeHead(200, {"content-type": "text/css"})
        res.write(Homestyle)
        res.end()
    }
    else if(url === '/favicon.png'){
        res.writeHead(200, {"content-type": "image/png"})
        res.write(Homelogo)
        res.end()
    }
    else if(url === '/about'){
    res.writeHead(200, {"content-type": "text/html"})
        res.write("<h1>about page</h1>")
        res.end()
    }else{
        res.writeHead(404, {"content-type": "text/html"})
        res.write("<h1>page not found</h1>")
        res.end()
    }
})
server.listen(5000);