/** @format */

const {
  createPub,
  reagir,
  commentaire,
  createAlert,
  notification,
  getPub,
  listeComs,
} = require("../controllers/pub-controller");
const router = require("express").Router();
const upload = require("../middleware/uploads");

router.post("/create-pub", upload.single("cheminFichier"), createPub);
router.get("/create-pub", getPub);
router.post("/reagir", reagir);
router.post("/commentaire", commentaire);
router.post("/evenement", upload.single("cheminFichier"), createAlert);
router.post("/notification", notification);
router.get("/commentaire",listeComs)

module.exports = router;
