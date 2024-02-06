const express = require('express')
const app = express()

const path = require('path')

//setup statics and middleware
app.use(express.static('./public'))

app.get('/',(req, res) => {
    res.sendFile(path.resolve(__dirname,'./1-navbar-app/index.html'))
    // res.status(200).send()
})

app.all('*', (req, res)=>{
    res.status(404).send("<h1>page not found</h1>")
})

app.listen(5000, () => {
    console.log('server is running with port 5000... ');
})