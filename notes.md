
CONNECTION DIAGRAM:
[API] <-------->[knex]<----->[DB driver]<----------->[DB]

Knex is a query builder: a fancy way of saying a translator between a programming language and SQL

A DB driver is a program that implements a protocol (ODBC or JDBC) for a  database connection. Basically, it allows you to talk to your database from your application.

Therefore, API --> translator --> database connector --> database

To install required dependencies:
1.) install knex and driver:

npm i knex sqlite 3

2.) configure knex and get a connection to the database
    a.) knex needs to figure out which db driver to use (refer to the diagram above), in this case it is called a client, and the package that we had installed, the npm module, is sqlite3.
    b.) To find the database, i.e. connect, we configure the connection object (it can also be a string). In the case of sqlite3, the properties that goes into the connection object is different depending on the driver you're using. For sqlite3, all you need to tell it is where to FIND the file. This is called file name, which is a complete path.

const knex = require('knex');

const knexConfig = {
    client: 'sqlite3', //(a)
    connection: {
        filename:'./data/lambda.db3' //(b)
    },
    useNullAsDefault: true, //required only for sqlite3
    debug: true,

const db = knex(knexConfig)

3.) add a data access layer/data access library
    a.) export an object module

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

function add(zoo) {
    return db('zoos')
    .insert(zoo, 'id')
    .then
}

function update(id, changes) {
    return null
}

function remove(id) {
    return null
}


