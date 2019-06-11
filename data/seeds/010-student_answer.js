exports.seed = function(knex, Promise) {
  // Inserts seed entries
  return knex("student_answers").insert([
    {
      student_id: '',
      student_answer: '',
      question_id: '',
      quiz_id: '',
      correct_answer: ''
    }
  ]);
};
