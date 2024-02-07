const express = require('express')
const app = express()
const {products} = require('./data')

app.get('/', (req,res) => {
    res.send('<h1>home page</h1> <a href="/api/products">products</a>')
})

// search by parameter in the url 

// app.get('/api/products/:productId', (req, res) => {
//     console.log(req.params);
//     const {productId} = req.params;
//     const search  = products.find((products) => products.id === Number(productId))

//     if (!search) {
//         return res.status(404).send("<h3>product does not exist</h3>")
//     }

//     return res.json(search)
// })


// with multiple parameters
// app.get('/api/products/:productId/reviews/:reniewId', (req, res) => {
    
//     console.log(req.params);
//     res.send("hello")
// })

// create query params 

app.get('/api/v1/query', (req, res) => {
    console.log(req.query);
})


app.get('/api/products', (req, res) => {
    res.json(products);
})

app.listen(5000, () => {
    console.log("server is  running at port 5000");
})
