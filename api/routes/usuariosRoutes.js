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

    router.post('/addnode', async (req, res) => {
        res.send(await usuarios.addNode(req.body));
    })

    return router;
};