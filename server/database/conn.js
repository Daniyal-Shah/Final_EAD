const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/examEAD")
  .then(() => {
    console.log("Database Connected");
  })
  .catch(() => console.log("Database Not Connected"));
