const database = require('../services/database.js');

const baseQuery = `select * from cfgusua`;

module.exports.find = async function find(context) {
    let query = baseQuery;
    const binds = {};

    if (context.id) {
        binds.id = context.id;

        query += `\nwhere ncodiusua = :id`;
    }

    const result = await database.simpleExecute(query, binds);

    return result.rows;
}
