const express = require('express')
const app = express()
let { people } = require('./data')

app.use(express.static('./method-public'))
app.use(express.urlencoded({extended: false}))

app.get('/api/people', (req, res) => {
    res.status(200).json([{success : true, data: people}])
})

app.post('/api/people', (req, res) => {
    const { name } = req.body;
    
    if(!name)
    {
        return res.status(400).json({success: false, msg: "please provide name"})
    }
    res.status(201).json({success: true, person: name})
})


app.post('/person', (req, res) => {
    const { name, age, Profession } = req.body;

    if(!name && !age && !Profession){
        return res.status(400).json({success: false, msg: "please enter name"})
    }

    res.status(201).json({success: true, data: [...people, name,age,Profession]})
})

app.post('/login', (req, res) => {
    const {name, age, Profession} = req.body;

    if(!name && !age && !Profession)
    {
        return res.status(200).send(`${name} is ${age} years old and is a ${Profession}`)
    }
    // console.log(req.body);
    res.status(401).send('please provide credentials')
})


app.listen(5000, () => {
    console.log("server is listening to port 5000");
})