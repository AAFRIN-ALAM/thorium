const jwt = require('jsonwebtoken')

const validation = async function (req, res, next){
    let token = req.headers["x-auth-token"]
    let  userId = req.params.userId
    
    if(!token) return res.send({status: false, msg: "[x-auth-token] Manadatory"})
    let tokenValidation = jwt.verify(token, "Facebook")


    if(!tokenValidation) return res.send({status: false, msg:"Invalid token"})
    next()
}


const authorization = function (req, res, next) {
   
    let token = req.headers["x-auth-token"];
  let decodedToken = jwt.verify(token, "Facebook");
  let userToBeModified = req.params.userId;
  let userLoggedIn = decodedToken.userId;
  if (userToBeModified != userLoggedIn)
    return res.send({
      status: false,
      msg: "User logged is not allowed to modify the requested users data",
    });

  next();
};



module.exports.authorization = authorization
module.exports.validation = validation