/** @format */

const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    alert: { type: mongoose.Schema.Types.ObjectId, ref: "Alert" },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Notification", schema);
