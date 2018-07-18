'use strict';

var mongoose = require('mongoose');
var dado = mongoose.model('Dados');


exports.listAll = function(req, res){
    dado.find({}, function(err, msg){
        if(err)
            res.send(err);

        res.json(msg);
    });
};

exports.save = function(req, res){
    var novoDado = new dado(req.body);

    novoDado.save(function(err, msg){
        if(err)
            res.send(err);

        res.json(msg);
    });
};