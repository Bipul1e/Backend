const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://kumarbipuldh:qwertyuiop@cluster0.2g9chwi.mongodb.net/");

const db = mongoose.connection;

db.on("error", console.error.bind("error!!"));

db.once("open", function () {
  console.info(`Successfully connected to database`);
});

module.exports = db;
