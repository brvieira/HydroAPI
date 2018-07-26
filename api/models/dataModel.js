'use strict';

var mongoose = require('mongoose');
var schema = mongoose.Schema;

var dataSchema = new schema({
    temperaturaInterna: {
        type: Number
    },
    umidadeInterna: {
        type: Number
    },

    temperaturaSolucao: {
        type: Number
    },

    data: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Dados', dataSchema);