const logger = (req, res, next) => {
    let method = req.method;
    let url = req.url;
    let year = new Date().getFullYear();
    console.log(method, url, year);
    // res.send('fuck off')

    // if next function is not called then it can overwrite the response of the get function 
    next()
}

module.exports = logger