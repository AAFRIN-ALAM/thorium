// const mongoose = require('mongoose');

// const bookModel = new mongoose.Schema( {
//     bookName: {
//         type : String, 
//         required : true
//     },
//     year: {
//         type : Number,
//         required : true
//     },
//     authorName: {
//         type: String,
//         required: true
//     }, 
//     tags: [String],
    
//     isPublished: Boolean,
//     prices: {
//         indianPrice: String,
//         europePrice: String,
//     },
//     sales: {type: Number, default: 10}
// }, { timestamps: true });



const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: {
        type: String,
        required: true
    }, 
    prices: {
        indianPrice: String,
        europePrice: String,
    }, 
    year: {
        type: Number,
        default: 2021
    },
    tags: [String],
    // authorName: String, 
    // totalPages: String,
    // stockAvailable: String,
}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema)


//module.exports = mongoose.model('Book', bookModel) //users

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
