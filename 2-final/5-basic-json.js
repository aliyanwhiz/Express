const express = require('express')
const app = express()
const {products} = require('./data')

app.get('/', (req,res) => {
    res.json(products)
})

// to show only required data

app.get('/api/products/1', (req, res) => {
    const search  = products.find((products) => products.id === 1)

    res.json(search)
})


// search by parameter in the url 

app.get('/api/products/:id', (req, res) => {
    console.log(req.params);
    const {id} = req.params;
    const search  = products.find((products) => products.id === Number(id))

    if (!search) {
        return res.status(404).send("<h3>product does not exist</h3>")
    }

    return res.json(search)
})


app.get('/api/products', (req, res) => {
    res.json(products);
})

app.listen(5000, () => {
    console.log("server is  running at port 5000");
})
