exports.seed = function(knex, Promise) {
  // Inserts seed entries
  return knex('users').insert([
    {name: 'Michael', username: 'Michael_Lewis', email: 'MLewis@gmail.com', role: 'Teacher'},
    {name: 'Agnes', username: 'Agnes_Thomas', email: 'AThomas@gmail.com', role: 'Student'},
    {name: 'Ruth', username: 'Ruth_Richards', email: 'RRichards@gmail.com', role: 'Teacher'},
    {name: 'Bennie', username: 'Bennie_Hearse', email: 'BHearse@gmail.com', role: 'Student'},
    {name: 'Louisa', username: 'Louisa_Kenny', email: 'LKenny@gmail.com', role: 'Teacher'},
  ]);
};
