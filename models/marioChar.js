const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create Schema
const marioSchema = new Schema({
    name: String,
    weight: Number
});

const marioModel = mongoose.model('mariochar', marioSchema);

module.exports = marioModel;