const express = require('express');    //framework to provides a set of features to develop web and app
const bodyParser = require('body-parser');    //Body-parser is the Node.js body parsing middleware
const multer = require('multer')
const route = require('./routes/route');     //path
const { default: mongoose } = require('mongoose');    //library
const app = express();

app.use(multer().any())
app.use(bodyParser.json()); // content type : application/json
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://Aafrin77:omaJBV2vPYhwOS7f@cluster0.ekfff.mongodb.net/group35Database", {

    useNewUrlParser: true
})
    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err))

app.use('/', route)


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
