const message = require("../models/message-model")


const discution = async(req,res)=>
{
    const mesg = message.create(req.body)
    res.status(201).json({
        success: true,
        message: "sended successfullity :)",
        mesg: mesg,
      });
}

module.exports = discution