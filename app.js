const express = require('express');
const routes = require('./routes/api');

const app = express();

app.use(routes);
app.listen(3000,()=> {
    console.log('Now listening at port 3000.')
})