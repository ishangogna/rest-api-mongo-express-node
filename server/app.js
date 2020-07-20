const express = require('express');
const mongoose = require('mongoose');

//Middleware
const routes = require('./routes/api');
const routeError = require('./middleware/routeError');

//connect to mongodb
mongoose.connect('mongodb://localhost/userInfo');

//override mongoose promise with global promise because it has been deprecated.
mongoose.Promise = global.Promise; 

const app = express();

//middleware to get the body of response on res.body
app.use(express.json());

//middleware to handle routes
app.use(routes);

//middleware to handle error on route handler.
app.use(routeError);

app.listen(5000,()=>{
    console.log('now listening @ 5000.')
})