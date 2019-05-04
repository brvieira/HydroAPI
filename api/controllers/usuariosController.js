'use strict'
const colecaoUsuarios = require('../utils/mongoConnector')('usuarios');
const bcrypt = require('bcrypt');

module.exports = () => {
    const newUser = async (data) => {
        try {
            const query = {
                email: data.email
            }
            const checkUser = await colecaoUsuarios.select(query);

            if(checkUser.length > 0) {
                return {status: false, message: "Email já cadastrado!"}
            } else {
                const saltRounds = 8;
                data.senha = await bcrypt.hash(data.senha, saltRounds);
                return await colecaoUsuarios.insert(data);
            }
        } catch (error) {
            console.error('Erro ao gerar hash')
        }
    }

    const editUser = async (data) => {
        delete data._id;
        try {
            const saltRounds = 8;
            data.senha = await bcrypt.hash(data.senha, saltRounds);
        } catch (error) {
            console.error('Erro ao gerar hash')
        } finally {
            return await colecaoUsuarios.update({email: data.email}, data);
        }
    }

    const login = async (data) => {
        let response = {};
        try {
            const query = {
                email: data.email
            }
            let usuario = await colecaoUsuarios.select(query);
            if(usuario.length > 0) {
                usuario = usuario[0];
                if(await bcrypt.compare(data.senha, usuario.senha)) {
                    response = {status: true, usuario};
                } else {
                    response = {status: false, message: 'Senha Inválida!'}
                }
            } else {
                response = {status: false, message: 'Email não cadastrado!'}
            }
        } catch (error) {
            console.error(error)
        } finally {
            return response;
        }
    }

    //TODO - Implementar função para inserção de novos nós sensores
    const addNode = async (data) => {
        try {
            delete data._id;
            return await colecaoUsuarios.update({email: data.email}, data);
        } catch (error) {
            console.error("Erro ao adicionar nó sensor!");
            return {status: false, message: "Erro ao adicionar nó sensor!"}
        }
    }

    return {
        newUser,
        login,
        editUser,
        addNode
    }
}