const http = require('http')

const server =  http.createServer((req, res) => {
    console.log("user is requesting data");
    res.end("home page")
})
server.listen(5000);