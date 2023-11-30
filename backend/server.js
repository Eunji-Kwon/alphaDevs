const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/AuthRoute");
require("dotenv").config();

const app = express();

// set port, listen for requests
const PORT = process.env.PORT || 8080;

var corsOptions = {
  origin: ["http://localhost:"+PORT],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

app.use(cors(corsOptions));

app.use(cookieParser());

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// const db = require("./models/index.js");

const dbConfig = require("./config/db.config.js");
mongoose.Promise = global.Promise;
const db = {
  mongoose : mongoose,
  url : dbConfig.url
};

mongoose.connect(db.url).then(() => {
  console.log("Connected to the AlphaDevsDB !!");
})
.catch(err => {
  console.log("Not able to connect database !!", err);
  process.exit();
});

/* async foo() {
  await mongoose.connect(process.env.MONGO_URI); // add await
  const connection = mongoose.connection;
} */

// Default route
app.use("/", authRoute);

app.listen(PORT, () => {
  console.log(`Server is alive on ${PORT} address.`);
});