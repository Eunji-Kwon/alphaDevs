const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const reservationRoutes = require('./routes/reservationRoutes'); // Import reservation routes

const app = express();

// set port, listen for requests
const PORT = process.env.PORT || 8080;

var corsOptions = {
  origin: "http://localhost:" + PORT
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB Connection
const db = require("./models");
db.mongoose.connect(db.url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to the AlphaDevsDB !!");
  })
  .catch(err => {
    console.log("Not able to connect database !!", err);
    process.exit();
  });

// Default route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to AlphaDevs' World." });
});

// Use reservation routes
app.use('/api/reservations', reservationRoutes);

// Global error handler (optional but recommended)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
  console.log(`Server is alive on ${PORT} address.`);
});
