exports.seed = function(knex, Promise) {
  // Inserts seed entries
  return knex("student_answers").insert([
    {
      student_answer: 'B',
    }
  ]);
};
