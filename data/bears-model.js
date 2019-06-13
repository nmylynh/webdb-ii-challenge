const knex = require('knex');
const knexConfig = require('../knexfile');
const db = knex(knexConfig.development);

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




