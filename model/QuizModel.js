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
    return db('quizzes');
}

function findBy(filter) {
    return db('quizzes').where(filter);
}

async function add(data) {
    const [id] = await db('quizzes').insert(data);

    return findById(id);
}

function findById(id) {
    return db('quizzes')
    .where({id})
    .first();
}

function update(id, changes) {
    return db('quizzes')
    .where({ id })
    .update(changes);
}

function remove(id) {
    return db('quizzes')
    .where('id', id)
    .del();
}
