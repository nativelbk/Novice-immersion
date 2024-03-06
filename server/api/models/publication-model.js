/** @format */
const mongoose = require("mongoose");
require("dotenv").config();

const schema = new mongoose.Schema(
  {
    description: {
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
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("publication", schema);
