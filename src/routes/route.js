let obj = require('./logger')
const express = require('express');

const router = express.Router();

router.get('/test-me', function (req, res) {
    obj.printMessage('thorium')
    console.log(obj.endPoint)

    res.send('My first ever api!')  //localhost:3000/test-me
});

module.exports = router;
// adding this comment for no reason