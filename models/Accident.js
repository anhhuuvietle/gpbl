const mongoose = require('mongoose');

//Define a schema
const Schema = mongoose.Schema;

const Accident = new Schema({
    long: {
    	type: Number,
    	require: true,
    },
    lat: {
        type: Number,
    	require: true,
    },
    typ: {
        type: Number,
        required: true,
    },
    rad: {
        type: Number,
        required: true,
    },
    time: {
        type: Date,
        default: Date.now,
    },
    status: {
        type: Boolean,
        default: true,
    }
});

module.exports = mongoose.model('Accident', Accident);