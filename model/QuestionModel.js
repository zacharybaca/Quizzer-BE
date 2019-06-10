const db = require('../data/dbConfig.js');

module.exports = {
    find,
    findBy,
    add,
    findById,
    remove,
    update
};

function find() {
    return db('questions');
}

function findBy(filter) {
    return db('questions').where(filter);
}

async function add(data) {
    const [id] = await db('questions').insert(data);

    return findById(id);
}

function findById(id) {
    return db('questions')
    .where({id})
    .first();
}

function update(id, changes) {
    return db('questions')
    .where({ id })
    .update(changes);
}

function remove(id) {
    return db('questions')
    .where('id', id)
    .del();
}