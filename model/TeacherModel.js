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
    return db('teacher');
}

function findBy(filter) {
    return db('teacher').where(filter);
}

async function add(user) {
    const [id] = await db('teacher').insert(user);

    return findById(id);
}

function findById(id) {
    return db('teacher')
    .where({id})
    .first();
}

function remove(id) {
    return db('teacher')
    .where('id', id)
    .del();
}

function update(id, changes) {
    return db('teacher')
    .where({ id })
    .update(changes);
}