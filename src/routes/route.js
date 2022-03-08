const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const middleware=require("../middleware/mid")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser  )

router.post("/login",middleware.mid1, userController.loginUser)


router.get("/users/:userId",middleware.mid1, userController.getUserData)

router.put("/users/:userId",middleware.mid1, userController.updateUser)

router.delete("/delete/:userId",userController.deleteUser)

module.exports = router;