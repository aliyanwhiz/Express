const http = require('http') 

const server = http.createServer((req, res) => {

    const url = req.url;

    if(url === '/')
    {
        console.log('user requested to server');
        res.write('<h1>200</h1>')
        res.end('HOME PAGE')
    }
    else if (url === '/about') {
        console.log('user requested to server');
        res.write('<h1>200</h1>')
        res.end('ABOUT PAGE')
    }
    else{
        console.log('user requested to server');
        res.write('<h1>404</h1>')
        res.end('page not found')    
    }

})

server.listen(5000, () => {

})