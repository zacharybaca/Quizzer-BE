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
    return db('quiz_route');
}

function findBy(filter) {
    return db('quiz_route').where(filter);
}

async function add(data) {
    const [id] = await db('quiz_route').insert(data);

    return findById(id);
}

function findById(id) {
    return db('quiz_route')
    .where({id})
    .first();
}

function remove(id) {
    return db('quiz_route')
    .where('id', id)
    .del();
}

function update(id, changes) {
    return db('quiz_route')
    .where({ id })
    .update(changes);
}
