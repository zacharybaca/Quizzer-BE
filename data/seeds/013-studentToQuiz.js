exports.seed = function(knex, Promise) {
  // Inserts seed entries
  return knex("studentToQuiz").insert([
    {
      student_id: 1,
      quiz_id: 1,
      completed: false
    },
    {
      student_id: 1,
      quiz_id: 2,
      completed: true
    }
  ]);
};
