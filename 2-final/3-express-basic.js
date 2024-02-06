const express = require('express')
const app = express();


// now there are different methods provided
// app.get
app.get('/', (req,res) => {
    console.log('user hit the server');
    res.status(200).send('home page')
})

app.get('/about', (req,res) => {
    console.log('user hit the server');
    res.status(200).send('about page')
})

// app.post
// app.put
// app.delete
// app.all
app.all('*', (req , res) => {
    console.log("user hit the server with invalid response");
    res.status(404).send('page not found')
})
// app.listen
app.listen(5000,()=>{
    console.log("server running on port 5000....");
})
// app.use