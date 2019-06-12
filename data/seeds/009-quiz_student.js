exports.seed = function(knex, Promise) {
  // Inserts seed entries
  return knex("quiz_student").insert([
    {
      score: 10,
      student_id: 1,
      quiz_id: 1
    }
  ]);
};
