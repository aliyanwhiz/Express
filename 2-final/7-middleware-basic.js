const express = require('express')
const app = express()
const logger = require('../logger')


app.get('/', logger ,(req,res) => {
    res.send("home")
})
app.get('/about', logger ,(req,res) => {
    res.send("about")
})

app.listen(5000, () => {
    console.log("server is listening to port 5000");
})