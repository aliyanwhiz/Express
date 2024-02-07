const authorize = (req, res, next) => {
    const {user} = req.query;
    if(user === "aliyan")
    {
        req.user = {name : "aliyan", id : 3}
        // res.send(user)
        next()
    }
    else{
        res.status(401).send("unauthorize user")
    }
}

module.exports = authorize