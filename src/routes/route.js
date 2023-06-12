const express = require('express')

const router = express.Router();

const controller = require('../controllers/controllert')

router.get('/test',(req,res)=>res.send('ok'));

router.post('/sendMail', controller.sendMail);

router.post('/auth', controller.otpAuth);

module.exports = router