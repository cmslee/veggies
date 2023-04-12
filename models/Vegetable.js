const mongoose = require('mongoose')

//create schema
const veggieSchema = new mongoose.Schema({
    name: {type: String, required: true},
    color: {type: String, required: true},
    readyToEat: {type: String, required: true}
});

//create model
const Veggie = mongoose.model('Veggie', veggieSchema);

//export
module.exports = Veggie;