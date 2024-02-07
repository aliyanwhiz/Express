const express = require('express')
const app = express()
const {products} = require('./data')

app.get('/', (req,res) => {
    res.send('<h1>home page</h1> <a href="/api/products">products</a>')
})

// to show only required data

app.get('/api/products/1', (req, res) => {
    const search  = products.find((products) => products.id === 1)

    res.json(search)
})

// to show limited or instructed data

app.get('/api/cards/products',(req,res) => {
    const carddata = products.map((products) => {
        const {id,name,image} = products;
        return {id,name,image};
    })
    res.json(carddata)
})


// search by parameter in the url 

app.get('/api/products/:productId', (req, res) => {
    console.log(req.params);
    const {productId} = req.params;
    const search  = products.find((products) => products.id === Number(productId))

    if (!search) {
        return res.status(404).send("<h3>product does not exist</h3>")
    }

    return res.json(search)
})


// with multiple parameters

app.get('/api/products/:productId/reviews/:reniewId', (req, res) => {
    
    res.json(req.params)

})

// create query params 

app.get('/api/v1/query', (req, res) => {
    const {search, limit} = req.query;
    let sortedProduct = [...products]

    if(search){
        sortedProduct = sortedProduct.filter((product) => {
            return product.name.startsWith(search)
        })
    }
    if(limit){
        sortedProduct = sortedProduct.slice(0,Number(limit))
    }
    if(sortedProduct <  1)
    {
        // res.status(200).send("<h1>product not found</h1>")
        res.status(200).json([{success: true, match: null}])
    }
    res.json(sortedProduct)

    // res.status(200).json([{search,limit}])
})


app.get('/api/products', (req, res) => {
    res.json(products);
})

app.listen(5000, () => {
    console.log("server is  running at port 5000");
})
