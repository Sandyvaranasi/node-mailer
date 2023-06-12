const nodemailer = require('nodemailer');
require("dotenv").config();

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

        if(!data.email||!data.message) return res.status(400).json({message:"please give both email and message"});

        if(typeof(data.email)!= "string"||!data.email.match(/^[\w\.-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)*\.[a-zA-Z]{2,}$/i)) return res.status(400).json({message:"please give valid email"});

        if(typeof(data.message)!= "string"|| data.message.trim().length==0) return res.status(400).json({message:"please give valid message"});

// Reciever and content setting ===>
        const mailOptions = {
          from: process.env.sender_mail,
          to: data.email,
          subject: 'Hello',
          text: data.message,
        };
        //========================================
      
        // Mail sending ===>
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.error(error);
            res.status(500).send('Error sending email');
          } else {
            otp = Math.floor(Math.random() * 10000)

            console.log('Email sent: ' + info.response);
            res.send({data:info.response,OTP:otp});
          }
        });
        //=======================================================

    }catch(err){
        res.status(500).json({message:err.message})
    }
}

const otpAuth = (req,res) =>{
  try{
    const OTP = req.body.OTP

    console.log(OTP);
    console.log(otp);

    if(OTP !== otp) return res.status(400).send({message:'invalid otp'})

    // else write rest of logic

    else res.status(200).send({data:'Success !!!'})
    otp =
    console.log("now otp" + otp);

  }catch(err){
        res.status(500).json({message:err.message})
    }
}

module.exports = {sendMail, otpAuth}