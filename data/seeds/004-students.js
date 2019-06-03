
exports.seed = function(knex, Promise) {
  // Inserts seed entries
  return knex('students').insert([
    {name: 'casey', username: 'casey2', email: 'casey@gmail.com', role: 'student'},
  ]);
};
