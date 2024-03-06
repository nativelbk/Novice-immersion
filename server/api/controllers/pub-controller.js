/** @format */

const pub = require("../models/publication-model");
const reaction = require("../models/reaction-model");
const coms = require("../models/comment-model");
const event = require("../models/alert-model");

const createPub = async (req, res) => {
  const result = await pub.create(req.body);
  res.status(201).json({ success: true, pub: result });
};

const reagir = async (req, res) => {
  const react = await reaction.create(req.body);
  res.status(201).json({ success: true, rect: react });
};

const commentaire = async (req, res) => {
  const comment = await coms.create(req.body);
  res.status(201).json({
    success: true,
    comment: comment,
  });
};

const createAlert = async (req, res) => {
  const alert = await event.create(req.body);
  res.status(201).json({
    success: true,
    alert: alert,
  });
};

module.exports = { createPub, reagir, commentaire, createAlert };
