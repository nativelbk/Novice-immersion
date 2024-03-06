const {createPub, reagir, commentaire} = require("../controllers/pub-controller")
const router = require("express").Router()



router.post("/create-pub",createPub)
router.post("/reagir",reagir)
router.post("/commentaire",commentaire)


module.exports = router