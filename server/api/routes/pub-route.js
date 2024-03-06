const {createPub, reagir} = require("../controllers/pub-controller")
const router = require("express").Router()



router.post("/create-pub",createPub)
router.post("/reagir",reagir)


module.exports = router