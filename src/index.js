const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json()); // content type : application/json
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://Aafrin77:omaJBV2vPYhwOS7f@cluster0.ekfff.mongodb.net/group35Database", {

    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/', route)


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
