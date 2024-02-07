const express = require('express')
const app = express()
const logger = require('./logger')
const authorize = require('./authorize')

app.use([authorize, logger])

app.get('/',(req,res) => {
    res.send("home")
})
app.get('/about',(req,res) => {
    res.send("about")
})
app.get('/contact',(req,res) => {
    res.send("contact")
})
app.get('/product',(req,res) => {
    res.send("product")
})
app.get('/item',(req,res) => {
    res.send("item")
})
app.get('/api/check',(req,res) => {
    console.log(req.user);
    res.send("check")
})
app.get('/api/order',(req,res) => {
    res.send("order")
})
app.all('*', (res, req) => {
    console.log("not found");
    // res.status(404).send("<h1>page not found</h1>")
})

app.listen(5000, () => {
    console.log("server is listening to port 5000");
})