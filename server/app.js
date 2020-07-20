const express = require('express');
const routes = require('./routes/api');

const app = express();

app.use(routes);

app.listen(4000,()=>{
    console.log('now listening @ 4000.')
})