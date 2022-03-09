const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const tokenValidate = require("../middleWare/auth");
//const UserValidate = require("../middleWare/UserValidator");
const authorization = require("../middleWare/auth");

router.post("/createUser", userController.createUser);

router.post("/loginUser", userController.loginUser);

router.get("/getUserData/:userId",tokenValidate.validation,authorization.authorization,userController.getUserData);

router.put("/updateUser/:userId",tokenValidate.validation,authorization.authorization,userController.updateUser);

router.delete("/deleteUser/:userId",tokenValidate.validation,authorization.authorization,userController.deleteData);

router.post("/users/:userId/posts",tokenValidate.validation,authorization.authorization, userController.createPost)

module.exports = router;