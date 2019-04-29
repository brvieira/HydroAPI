'use strict'
const mongoClient = require('mongodb').MongoClient;
const dbUrl = process.env.MONGOLAB_URI;

/**
 * Retorna uma conexão com a coleção informada como parâmetro.
 * @param {String} collectionName
 */
module.exports = (collectionName) => {
    let collection;

    mongoClient.connect(dbUrl, { useNewUrlParser: true }, (error, client) => {
        if (error) {
            console.error('Erro ao conectar com o MongoDB', error);
            return;
        }
        collection = client.db().collection(collectionName);
    })
    /**
     * Insere o documento recebido como parâmetro na coleção.
     * @param {*} doc 
     */
    const insert = async (doc) => {
        try {
            await collection.insertOne(doc);
            return {message: 'Success', status: true}
        } catch (error) {
            console.error('Erro ao salvar no banco', error);
            return {message: 'Fail', status: false}
        }
    }

    /**
     * Atualiza o antigo documento(oldDoc) para o novo documento(newDoc), ambos são recebidos como parâmetro.
     * @param {*} oldDoc 
     * @param {*} newDoc 
     */
    const update = async (oldDoc, newDoc) => {
        try {
            await collection.update(oldDoc, { '$set': newDoc });
            return {message: 'Sucess'}
        } catch (error) {
            console.error('Erro ao atualizar no banco', error);
            return {message: 'Fail'}
        }
    }

    /**
     * Retorna um array com os valores encontrados com base na query recebida como parâmetro.
     * @param {*} query 
     */
    const select = async (query) => {
        try {
            return await collection.find(query).toArray();
        } catch (error) {
            console.error('Erro ao procurar no banco', error);
            return [];
        }
    }

    return {
        insert,
        update,
        select
    }
}


