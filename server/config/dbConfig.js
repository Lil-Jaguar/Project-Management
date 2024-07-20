const mongoose = require('mongoose');
require("dotenv").config();

mongoose.connect("mongodb://localhost:27017/mydatabase",{
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("Mongo db connected successfully");
});

connection.on("error", (err) => {
  console.log("Mongo db connection error: ", err);
});

module.exports = mongoose;