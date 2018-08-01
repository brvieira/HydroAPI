'use strict';

var mongoose = require('mongoose');
var dado = mongoose.model('Dados');


exports.listAll = function (req, res) {
    dado.find({}, function (err, msg) {
        if (err)
            res.send(err);

        res.json(msg);
    });
};

exports.listByDateRange = function (req, res) {
    var dataInicial = req.params.dataInicial;
    var dataFinal = req.params.dataFinal;
    var query = {
        "data": {
            "$gte": dataInicial,
            "$lte": dataFinal
        }
    };

    dado.find(query, function (err, msg) {
        if (err)
            res.send(err);

        res.json(msg);
    });
};

exports.save = function (req, res) {
    var novoDado = new dado(req.body);

    novoDado.save(function (err, msg) {
        if (err)
            res.send(err);

        res.json(msg);
    });
};
