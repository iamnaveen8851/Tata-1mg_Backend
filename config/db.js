const { default: mongoose, connect } = require("mongoose");
require("dotenv").config();

const connectDb = mongoose.connect(process.env.MONGODB_URI);

module.exports = connectDb;