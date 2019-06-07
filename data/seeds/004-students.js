
exports.seed = function(knex, Promise) {
  // Inserts seed entries
  return knex('student').insert([
    {name: 'Casey', username: 'Casey2', email: 'Casey@gmail.com', role: 'Student', teacher_id: '1'},
    {name: 'Kelly', username: 'Kelly2', email: 'Kelly@gmail.com', role: 'Student', teacher_id: '2'},
    {name: 'Sammy', username: 'Sammy2', email: 'Sammy@gmail.com', role: 'Student', teacher_id: '3'},
    {name: 'Frank', username: 'Frank2', email: 'Frank@gmail.com', role: 'Student', teacher_id: '4'},
    {name: 'Lucas', username: 'Lucas2', email: 'Lucas@gmail.com', role: 'Student', teacher_id: '5'},
  ]);
};
