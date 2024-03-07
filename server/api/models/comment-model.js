/** @format */

const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    publication: { type: mongoose.Schema.Types.ObjectId, ref: "Publication" },
    text: {
      type: String,
      require: [true, "Comment is required"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Comment", schema);
