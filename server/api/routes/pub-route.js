/** @format */

const {
  createPub,
  reagir,
  commentaire,
  createAlert,
} = require("../controllers/pub-controller");
const router = require("express").Router();

router.post("/create-pub", createPub);
router.post("/reagir", reagir);
router.post("/commentaire", commentaire);
router.post("/evenement", createAlert);

module.exports = router;
