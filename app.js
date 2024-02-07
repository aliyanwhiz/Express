const express = require('express')
const app = express()
const { human } = require('./new-data')

app.get('/get', (req,res) => {
    console.log("user hit get api");
    res.status(200).json([{human}])
})

app.post('/post', (req, res) => {
    const { name } = req.body;
    if(name === "")
    {
        return res.status(400).json([{success: false,msg: "please provide name" }])
    }

    res.status(201).send(`welcome ${name}`)
})

app.listen(5000,() => {
    console.log("server is running on port 5000");
})