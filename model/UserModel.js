const db = require('../data/dbConfig.js');
// const users = require('../api/queries.js');

module.exports = {
    find,
    findBy,
    add,
    findById,
    remove,
    update,
};

function find() {
    return db('users');
}

function findBy(filter) {
    return db('users').where(filter);
}

async function add(user) {
    const [id] = await db('users').insert(user);

    return findById(id);
}

function findById(id) {
    return db('users')
    .where({id})
    .first();
}

function update(id, changes) {
    return db('users')
    .where({ id })
    .update(changes);
}

function remove(id) {
    return db('users')
    .where('id', id)
    .del();
}
