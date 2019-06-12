const knex = require('knex');

const knexConfig = {
    client: 'sqlite3', //(a)
    connection: {
        filename:'./data/lambda.db3' //(b)
    },
    useNullAsDefault: true, //required only for sqlite3
    debug: true,

const db = knex(knexConfig)