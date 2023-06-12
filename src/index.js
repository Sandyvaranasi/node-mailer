const express = require('express');

const app = express();

const route = require('./routes/route')

app.use(express.json());

app.use('/api',route);

app.listen(3000,()=>console.log('listening to port 3000'))