const db = require('../data/dbConfig.js');

module.exports = {
    find,
    findBy,
    add,
    findById,
    remove,
    update,
};

function find() {
    return db('students');
}

function findBy(filter) {
    return db('students').where(filter);
}

async function add(user) {
    const [id] = await db('students').insert(user);

    return findById(id);
}

function findById(id) {
    return db('students')
    .where({id})
    .first();
}

function update(id, changes) {
    return db('students')
    .where({ id })
    .update(changes);
}

function remove(id) {
    return db('students')
    .where('id', id)
    .del();
}
