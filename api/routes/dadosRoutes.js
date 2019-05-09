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

    router.get('/getData/:token', async (req, res) => {
        const token = req.params.token;
        res.send(await dados.listBytoken(token));
    })

    return router;
};