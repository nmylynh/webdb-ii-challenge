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
    return db('zoos');
}

function findById(id) {
    return db('zoos')
    .where({ id })
    .first()
}

async function add(zoo) {
const [id] = await db('zoos').insert(zoo);

return findById(id);
}

function update(id, changes) {
    return db('zoos')
    .where({ id })
    .update(changes, '*')
}

function remove(id) {
    return db('zoos')
    .where({ id })
    .del();
}




