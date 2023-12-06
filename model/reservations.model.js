const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// RESERVATION SCHEMA 

let Reservation = new Schema({
    dateTime:{
        type: Date,
        required: true
    },
    // time:{
    //     type:String
    // },
    guestNum:{
        type:Number
    },
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    contact:{
        type:String
    }
});

module.exports = mongoose.model('Reservation',Reservation);
