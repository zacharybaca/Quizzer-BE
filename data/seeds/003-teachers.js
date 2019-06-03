
exports.seed = function(knex, Promise) {
  // Inserts seed entries
  return knex('teachers').insert([
    {name: 'lucy', username: 'lucy2', email: 'lucy@gmail.com', role: 'teacher'},
  ]);
};
