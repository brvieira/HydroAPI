'use strict'

const express = require('express');
const router = express.Router();
const dados = require('../controllers/dadosController')();

module.exports = () => {
    router.post('/', async (req, res) => {
        res.send(await dados.save(req.body));
    })

    router.get('/', async (req, res) => {
        res.send(await dados.listAll());
    })

    router.get('/:dataInicial/:dataFinal', async (req, res) => {
        const dataInicial = req.params.dataInicial;
        const dataFinal = req.params.dataFinal;
        res.send(await dados.listByDateRange(dataInicial, dataFinal));
    })

    return router;
};