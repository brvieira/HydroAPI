'use strict';

module.exports = function (app) {
    var dados = require('../controllers/dataController');

    app.route('/dados').get(dados.listAll);
    app.route('/dados/:dataInicial&:dataFinal').get(dados.listByDateRange);
    app.route('/dados').post(dados.save);

};