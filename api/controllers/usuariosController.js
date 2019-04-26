'use strict'
const colecaoUsuarios = require('../utils/mongoConnector')('usuarios');
const bcrypt = require('bcrypt');

module.exports = () => {
    const newUser = async (data) => {
        return await colecaoUsuarios.insert(data);
    }

    const login = async (data) => {
        try {
            
        } catch (error) {
            
        }
    }
    //TODO - Implementar função para inserção de novos nós sensores
    const addNode = async (data) => {

    }
}