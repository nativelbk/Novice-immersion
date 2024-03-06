const pub = require("../models/publication-model")



const createPub =async(req,res)=>
{
    const result = await pub.create(req.body)
    res.status(201).json({success:true,"message":"Created successfull","pub":result})
}





module.exports = createPub