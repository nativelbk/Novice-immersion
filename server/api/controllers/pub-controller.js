/** @format */

const pub = require("../models/publication-model");
const reaction = require("../models/reaction-model");
const coms = require("../models/comment-model");
const event = require("../models/alert-model");
const Notification = require("../models/notification-model");
const model = require("../models/auth-model")
// const users = require("../models/auth-model")
const path = require("path");

const createPub = async (req, res) => {
  const cheminFichier = req.file && req.file.path;
  console.log(cheminFichier);
  const { description, category, tag, user } = req.body;
  const result = await pub.create({
    description,
    category,
    // path: cheminFichier,
    tag,
    user,
  });
  res
    .status(201)
    .json({ success: true, message: "Created successfull", pub: result });
};

const getPub = async (req, res) => {
  const data = await pub.find().populate("user").sort({ createdAt:'desc' });
  res.status(200).json({ publication: data });
};

const reagir = async (req, res) => {
  const react = await reaction.create(req.body);
  res.status(201).json({ success: true, rect: react });
};

const commentaire = async (req, res) => {
  const {text} = req.body
  // console.log(text);
  // const pub = getPub()
  // console.log(pub);
  const comment = await coms.create({publication:"65ebfcac9f24629c17ae2988",user:"65e975dc21cb41080077bcb9",text});
  res.status(201).json({
    success: true,
    comment: comment,
  });
};

const listeComs =async(req,res)=>
{
  // const id = await coms.find()
  // const publication = id[0].publication
  // console.log(publication);
  const id = req.params.id
  const users = await model.findById({_id:"65e975dc21cb41080077bcb9"})


  const comment = await coms.find()
  res.status(200).json({commentaire:comment,users:users})
}

// const utilisateur = async(req,res)=>
// {
//   const user = await 
// }

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
  listeComs
};
