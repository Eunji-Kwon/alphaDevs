const mongoose = require('mongoose');
const validator = require('validator'); // Import the validator library

const Schema = mongoose.Schema;

// RESERVATION SCHEMA 
let Reservation = new Schema({
    dateTime: {
        type: Date,
        required: true
    },
    guestNum: {
        type: Number
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, 'Invalid email address'] // Email validation
    }
});

module.exports = mongoose.model('Reservation', Reservation);
