const pub = require("../models/publication-model")
const reaction = require("../models/reaction-model")



const createPub =async(req,res)=>
{
    const result = await pub.create(req.body)
    res.status(201).json({success:true,"message":"Created successfull","pub":result})
}

const reagir=async(req,res)=>
{
    const react = await reaction.create(req.body)
    res.status(201).json({success:true,message:"Created successfull",rect:react})
}



module.exports = {createPub,reagir}