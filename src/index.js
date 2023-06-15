const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors())

const route = require('./routes/route')

app.use(express.json());

mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true})
.then(()=>console.log('DB connected'))
.catch(error=>console.log(error.message));

app.use('/api',route);

app.listen(process.env.PORT||3000,()=>console.log('listening to port '+ process.env.PORT||3000));