const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create Schema
const bookSchema = new Schema({
    title: String,
    pages: Number
});

const authorSchema = new Schema({
    name: String,
    age: Number,
    books: [bookSchema]
});

const authorModel = mongoose.model('author', authorSchema);

module.exports = authorModel;