const mongoose = require('mongoose');

// mongoose schema
const Schema = mongoose.Schema;

// create a schema
const PersonSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    patronymic: {
        type: String,
        required: true
    },
    pass_series: {
        type: Number,
        min: 1,
        max: 9999,
        required: true
    },
    pass_num: {
        type: Number,
        min: 1,
        max: 999999,
        required: true
    },
    pass_code: {
        type: Number,
        min: 1,
        max: 999999,
        required: true
    },
    pass_date: {
        type: Date,
        default: Date.now,
        required: true
    },
    pass_ufms: {
        type: String,
        required: true
    },
    pass_place: {
        type: String,
        required: true
    },
    birh_date: {
        type: Date,
        default: Date.now,
        required: true
    },
    birth_place: {
        type: String,
        required: true
    },
});

// create a model that takes in a name and the schema
module.exports = Person = mongoose.model('person', PersonSchema);
