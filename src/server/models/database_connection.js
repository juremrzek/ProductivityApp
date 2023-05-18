const mongoose = require("mongoose");
require("dotenv").config();

dbURI = process.env.MONGODB_ATLAS_URI;
mongoose.connect(dbURI);

mongoose.connection.on("connected", () => {
  console.log("Connected to database.");
});

mongoose.connection.on("error", (err) => {
  console.log(err);
  console.log("Failed to connect to database.");
});

mongoose.connection.on("disconnected", () => {
  console.log("Disconnected from database.");
});

require("./schemas");