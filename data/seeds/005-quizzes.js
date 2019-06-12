exports.seed = function(knex, Promise) {
  // Inserts seed entries
  return knex("quizzes").insert([
    {
      class_average: 10,
      teacher_id: 1
    }
  ]);
};
