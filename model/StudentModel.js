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
    return db('student');
}

function findBy(filter) {
    return db('student').where(filter);
}

async function add(user) {
    const [id] = await db('student').insert(user);

    return findById(id);
}

function findById(id) {
    return db('student')
    .where({id})
    .first();
}

function update(id, changes) {
    return db('student')
    .where({ id })
    .update(changes);
}

function remove(id) {
    return db('student')
    .where('id', id)
    .del();
}
