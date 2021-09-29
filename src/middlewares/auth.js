module.exports.isUserAuthenticated = (req, res, next) => {
    if (req.user){
        console.log(req);
        next();
    }
    else {
        console.log(req.user);
        res.status(401).send("You must login first");
    }
};