exports.seed = function(knex, Promise) {
  // Inserts seed entries
  return knex("quiz_student").insert([
    {
      student_id: '',
      quiz_id: '',
      score: ''
    }
  ]);
};
