/** @format */

const pub = require("../models/publication-model");
const reaction = require("../models/reaction-model");
const coms = require("../models/comment-model");
const event = require("../models/alert-model");
const Notification = require("../models/notification-model");
const path = require("path");

const createPub = async (req, res) => {
  const cheminFichier = req.file && req.file.path;
  const { description, category, tag, user } = req.body;
  const result = await pub.create({
    description,
    category,
    path: cheminFichier,
    tag: [...tag],
    user,
  });
  res
    .status(201)
    .json({ success: true, message: "Created successfull", pub: result });
};
const getPub = async (req, res) => {
  const data = await pub.find().populate("user");
  res.status(200).json({ publication: data });
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
  const cheminFichier = req.file && req.file.path;
  const { title } = req.body;
  const alert = await event.create({ title, path: cheminFichier });
  res.status(201).json({
    success: true,
    message: "pub of event is successfullity :)",
    alert: alert,
  });
};

const notification = async (req, res) => {
  const notif = await Notification.create(req.body);
  res.status(201).json({
    success: true,
    message: "notification successfullity :)",
    notif: notif,
  });
};

module.exports = {
  createPub,
  reagir,
  commentaire,
  createAlert,
  notification,
  getPub,
};
