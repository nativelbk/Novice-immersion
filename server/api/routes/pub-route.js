/** @format */

const {
  createPub,
  reagir,
  commentaire,
  createAlert,
  notification,
  getPub,
} = require("../controllers/pub-controller");
const router = require("express").Router();
const upload = require("../middleware/uploads");

router.post("/create-pub", upload.single("cheminFichier"), createPub);
router.get("/create-pub", getPub);
router.post("/reagir", reagir);
router.post("/commentaire", commentaire);
router.post("/evenement", upload.single("cheminFichier"), createAlert);
router.post("/notification", notification);

module.exports = router;
