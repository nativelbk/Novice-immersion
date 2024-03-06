const pub = require("../models/publication-model")



const createPub =async(req,res)=>
{
    await pub.create(req.body)
    res.status(201).json({success:true,"message":"Created successfull"})
}





module.exports = createPub