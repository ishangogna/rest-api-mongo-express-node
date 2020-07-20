const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/users', function(req,res,next){
    res.send({type : 'GET'})
});

router.post('/users', function(req,res, next){
    // or var user = new User(req.body); user.save(). 
    //or use below command which combines the two and returns a promise w the data that was just saved
    User.create(req.body)
        .then(user => res.send(user))
        //if there is an error, maybe validation failed?
        // .catch(err=> res.send({error : err.message}))
        // ORRRRR use 'next' which basically calls the next middleware.
        .catch(next)

});

router.put('/users/:id', function(req,res,next){
    res.send({type : 'PUT'})
});

router.delete('/users/:id', function(req,res,next){
    //findByIdAndRemove finds an element from the collection by id and removes it.
    //it returns a promise with the data it removed.
    User.findByIdAndRemove({_id : req.params.id})
        .then(user => res.send({user_removed : user}))
});

module.exports = router;
