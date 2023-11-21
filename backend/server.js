const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// set port, listen for requests
const PORT = process.env.PORT || 8080;

var corsOptions = {
  origin: "http://localhost:"+PORT
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Default route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to AlphaDevs' World." });
});

app.listen(PORT, () => {
  console.log(`Server is alive on ${PORT} address.`);
});