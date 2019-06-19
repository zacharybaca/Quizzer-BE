exports.seed = function(knex, Promise) {
  // Inserts seed entries
  return knex("quizzes").insert([
    {
      class_average: 10,
      teacher_id: 1
    },
    {
      class_average: 100,
      teacher_id: 1
    }
  ]);
};
