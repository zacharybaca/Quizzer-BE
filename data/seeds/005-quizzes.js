exports.seed = function(knex, Promise) {
  // Inserts seed entries
  return knex("quizzes").insert([
    {
      class_average: 10,
      teacher_id: 1,
      quiz_name: "Math 101",
      description: "a math quiz"
    },
    {
      class_average: 100,
      teacher_id: 1,
      quiz_name: "Science 101",
      description: "a science quiz"
    }
  ]);
};
