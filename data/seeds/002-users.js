
exports.seed = function(knex, Promise) {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'Kelly'},
        {id: 2, name: 'Michael'},
      ]);
};
