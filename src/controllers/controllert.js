const nodemailer = require('nodemailer');
require("dotenv").config();
const model = require('../models/model')

// Transporter creation ===>
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.sender_mail, 
    pass: process.env.sender_pass 
  },
});

let otp;
//==============================================

const sendMail = async (req,res)=>{
    try{
        const data = req.body

        if(!data.email||!data.fullName) return res.status(400).json({message:"please give both email and fullName"});

        if(typeof(data.email)!= "string"||!data.email.match(/^[\w\.-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)*\.[a-zA-Z]{2,}$/i)) return res.status(400).json({message:"please give valid email"});

        if(typeof(data.fullName)!= "string"|| data.message.trim().length==0) return res.status(400).json({message:"please give valid fullName"});

        //Generating OTP ===>
        otp = Math.floor(Math.random() * 10000)
        //================================

// Reciever and content setting ===>
        const mailOptions = {
          from: process.env.sender_mail,
          to: data.email,
          subject: 'Varification',
          text: `Hello ${data.fullName} Thank You for using our service. Your OTP for this session is ${otp}`,
        };
        //========================================
      
        // Mail sending ===>
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.error(error);
            res.status(500).send('Error sending email');
          } else {
            console.log('Email sent: ' + info.response);
            res.send({data:info.response});
          }
        });
        //=======================================================

    }catch(err){
        res.status(500).json({message:err.message})
    }
}

const otpAuth = async (req,res) =>{
  try{
    const {email, fullName, OTP} = req.body

    if(OTP !== otp) return res.status(400).send({message:'invalid otp'})

    // DB findbymail and return id
    const existingUser = await model.findOne(email)
    if(existingUser){
      otp = undefined;
      return res.status(200).json({data:existingUser})
    }else{
      otp = undefined;
      const newUser = await model.create({email:email,fullName:fullName});
      return res.status(201).json({data:newUser});
    }
  }catch(err){
        res.status(500).json({message:err.message})
    }
}

module.exports = {sendMail, otpAuth}