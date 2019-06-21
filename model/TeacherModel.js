const db = require("../data/dbConfig.js");

module.exports = {
  find,
  findBy,
  add,
  findById,
  remove,
  update
};

function find() {
  return db("teachers");
}

function findBy(filter) {
  return db("teachers").where(filter);
}

async function add(user) {
  const [id] = await db("teachers")
    .returning("id")
    .insert(user);

  return findById(id);
}

function findById(id) {
  return db("teachers")
    .where({ id })
    .first();
}

function update(id, changes) {
  return db("teachers")
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db("teachers")
    .where("id", id)
    .del();
}
