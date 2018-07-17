'use strict';

module.exports = function(app){
    var dados = require('../controllers/dataController');

    app.route('/dados')
        .get(dados.listAll)
        .post(dados.save);

};