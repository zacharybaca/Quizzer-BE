exports.seed = function(knex, Promise) {
  // Inserts seed entries
  return knex("quiz_student").insert([
    {
      student_id: 6,
      quiz_id: 1,
      score: 10,
    }
  ]);
};
