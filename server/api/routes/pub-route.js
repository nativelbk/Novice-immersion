const createPub = require("../controllers/pub-controller")
const router = require("express").Router()



router.post("/create-pub",createPub)


module.exports = router