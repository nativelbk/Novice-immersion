/** @format */
const mongoose = require("mongoose");
require("dotenv").config();

const schema = new mongoose.Schema(
  {
    descrition: {
      type: String,
      required: [true, "Please provide a description"],
      trim: true,
    },
    path: {
      type: String,
    },
    tag: {
      type: [String],
    },
    category: {
      type: String,
      required: [true, "Please provide a category"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", schema);
