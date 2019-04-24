'use strict';

const colecaoDados = require('../utils/mongoConnector')('dados');

module.exports = () => {

    const save = async (doc) => {
        doc.data = new Date();
        return await colecaoDados.insert(doc);
    }

    const listAll = async () => {
        return await colecaoDados.select({});
    }

    const listByDateRange = async (dataInicial, dataFinal) => {
        let query = {
            "data": {
                "$gte": new Date(dataInicial),
                "$lte": new Date(dataFinal)
            }
        }

        return await colecaoDados.select(query);
    }

    return {
        save,
        listAll,
        listByDateRange
    }
}

