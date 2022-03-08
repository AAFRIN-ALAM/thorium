const jwt = require("jsonwebtoken")
let mid1=function(req,res,next){
    let xAuthToken = req.headers["x-auth-token"]
    if( xAuthToken ){ //!= undefined
        // console.log("done")
        next()
    }
    else{
        res.send("Request is missing a mandatory header")
    }
}
module.exports.mid1 = mid1;