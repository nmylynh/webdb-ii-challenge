const knex = require('knex');

const knexConfig = {
    client: 'sqlite3', //(a)
    connection: {
        filename:'./data/lambda.db3' //(b)
    },
    useNullAsDefault: true, //required only for sqlite3
    debug: true
}

const db = knex(knexConfig);

module.exports = {
    find,
    findById,
    add,
    update,
    remove
}

function find() {
    return db('bears');
}

function findById(id) {
    return db('bears')
    .where({ id })
    .first()
}

async function add(bear) {
const [id] = await db('bears').insert(bear);

return findById(id);
}

function update(id, changes) {
    return db('bears')
    .where({ id })
    .update(changes, '*')
}

function remove(id) {
    return db('bears')
    .where({ id })
    .del();
}




