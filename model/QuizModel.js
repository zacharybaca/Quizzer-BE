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
    return db('quiz');
}

function findBy(filter) {
    return db('quiz').where(filter);
}

async function add(data) {
    const [id] = await db('quiz').insert(data);

    return findById(id);
}

function findById(id) {
    return db('quiz')
    .where({id})
    .first();
}

function update(id, changes) {
    return db('quiz')
    .where({ id })
    .update(changes);
}

function remove(id) {
    return db('quiz')
    .where('id', id)
    .del();
}
