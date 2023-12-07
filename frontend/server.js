const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const validator = require('validator');
const reservationRoutes = require('./reservationRoutes');

// Define Schema and Model for Reservation
// const Schema = mongoose.Schema;
// const reservationSchema = new Schema({
//     dateTime: {
//         type: Date,
//         required: true
//     },
//     guestNum: {
//         type: Number
//     },
//     firstName: {
//         type: String
//     },
//     lastName: {
//         type: String
//     },
//     contact: {
//         type: String,
//         required: true,
//         validate: [validator.isEmail, 'Invalid email address'] // Email validation
//     }
// });
//const Reservations = mongoose.model('Reservation', reservationSchema);
app.use(cors({ origin: 'http://localhost:3000' })); // Replace with your frontend's URL
app.use(bodyParser.json());


// MongoDB connection
mongoose.connect('mongodb+srv://CaptainG:71knifh47spkR2y8@cluster0.axag1mc.mongodb.net/',
{ useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

// Reservation Routes
// Define your routes for Reservation model here similar to Todo routes
// Example GET route for fetching all reservations

//reservationRoutes.route('/reservation').get((req, res) => {
//    Reservations.find()
//        .then(reservations => res.status(200).json(reservations))
//        .catch(err => res.status(400).json({ "error": err }));
//});

// Other routes (POST, PUT, DELETE) for Reservation can be added similarly

app.use('/reservation', reservationRoutes);

app.listen(8081, () => {
    console.log("Server is running on port 8081");
});
