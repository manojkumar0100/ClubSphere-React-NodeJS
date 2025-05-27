const dotenv = require("dotenv");
dotenv.config();

const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE).then(() => {  //configure in your .env
  console.log("Database connected successfully");
});
