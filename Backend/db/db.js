const mongoose = require("mongoose");

function connectDB() {
  const dbUri = process.env.DB_CONNECT;
  if (!dbUri) {
    console.error("Error: DB_CONNECT environment variable is not defined.");
    process.exit(1); 
  }

  mongoose
    .connect(dbUri)
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.error("Error connecting to MongoDB:", err);
    });
}

module.exports = connectDB;
