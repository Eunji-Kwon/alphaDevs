const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const validator = require('validator');
const reservationRoutes = require('./reservationRoutes');


app.use(cors({ origin: 'http://localhost:3000' })); // Replace with your frontend's URL
app.use(bodyParser.json());


// MongoDB connection
mongoose.connect('mongodb+srv://CaptainG:71knifh47spkR2y8@cluster0.axag1mc.mongodb.net/',
{ useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})



app.use('/reservation', reservationRoutes);

app.listen(8081, () => {
    console.log("Server is running on port 8081");
});
