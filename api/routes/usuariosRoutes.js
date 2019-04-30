'use strict'

const express = require('express');
const router = express.Router();
const usuarios = require('../controllers/usuariosController')();

module.exports = () => {
    router.post('/newUser', async (req, res) => {
        res.send(await usuarios.newUser(req.body));
    })

    router.post('/login', async (req, res) => {
        res.send(await usuarios.login(req.body));
    })

    router.post('/editUser', async (req, res) => {
        res.send(await usuarios.editUser(req.body));
    })

    router.get('/addNode', async (req, res) => {
        const dataInicial = req.params.dataInicial;
        const dataFinal = req.params.dataFinal;
        res.send(await dados.listByDateRange(dataInicial, dataFinal));
    })

    return router;
};