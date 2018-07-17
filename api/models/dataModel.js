'use strict';

var mongoose = require('mongoose');
var schema = mongoose.Schema;
var dataSchema = new schema({
    temperaturaInterna: {
        type: String
    },
    umidadeInterna: {
        type: String
    },

    data: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Dados', dataSchema);