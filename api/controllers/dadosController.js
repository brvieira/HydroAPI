'use strict';

const colecaoDados = require('../utils/mongoConnector')('dados');

module.exports = () => {

  const save = async (doc) => {
    doc.data = new Date();
    return await colecaoDados.insert(doc);
  }

  const listAll = async () => {
    let result = [];
    try {
      let data = await colecaoDados.select({});

      for (let item of data) {
        for (let metric in item) {
          if (metric != "_id" && metric != "token" && metric != "data") {
            if (!result.find(x => x.name == metric)) {
              result.push({ name: metric, data: [] });
            }

            result
              .find(x => x.name == metric)
              .data.push({
                x: item.data,
                y: item[metric]
              });
          }
        }
      }
    } catch (error) {
      console.error(error);
    } finally {
      return result;
    }
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

  const listBytoken = async (token) => {
    let result = [];
    try {
      let query = {
        "token": token
      }

      let data = await colecaoDados.select(query);

      for (let item of data) {
        for (let metric in item) {
          if (metric != "_id" && metric != "token" && metric != "data") {
            if (!result.find(x => x.name == metric)) {
              result.push({ name: metric, data: [] });
            }

            result
              .find(x => x.name == metric)
              .data.push({
                x: item.data,
                y: item[metric]
              });
          }
        }
      }
    } catch (error) {
      console.error(error);
    } finally {
      return result;
    }
  }

  return {
    save,
    listAll,
    listByDateRange,
    listBytoken
  }
}

