const { route } = require("../routes/api")

//if routes gives error, it will go to this custom middleware :
// a middleware takes 4 args : err, req, res and next if at all u wanna call next MW.
function routeError(err,req,res,next){
    res.status(422).send({'error' : err.message})
}

module.exports = routeError;
