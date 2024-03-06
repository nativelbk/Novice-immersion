const {createPub, reagir, commentaire, createAlert, notification} = require("../controllers/pub-controller")
const router = require("express").Router()



router.post("/create-pub",createPub)
router.post("/reagir",reagir)
router.post("/commentaire",commentaire)
router.post("/evenement",createAlert)
router.post("/notification",notification)


module.exports = router