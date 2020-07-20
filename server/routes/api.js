const express = require('express');
const router = express.Router();

router.get('/', function(req,res){
    res.send({type : 'GET'})
});

router.post('/', function(req,res){
    res.send({type : 'POST'})
});

router.put('/', function(req,res){
    res.send({type : 'PUT'})
});

router.delete('/', function(req,res){
    res.send({type : 'DELETE'})
});

module.exports = router;
