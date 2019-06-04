
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'test'},
        {id: 2, user: 'test'},
        {id: 3, password: 'test'},
        {id: 4, email: 'test@test.com'}
      ]);
    });
};
