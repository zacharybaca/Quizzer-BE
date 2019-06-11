exports.seed = function(knex, Promise) {
  // Inserts seed entries
  return knex("student_answers").insert([
    {
      student_id: 6,
      student_answer: 'B',
      question_id: 1,
      quiz_id: 1,
      correct_answer: 'B',
    }
  ]);
};
