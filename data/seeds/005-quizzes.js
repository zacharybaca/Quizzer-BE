exports.seed = function(knex, Promise) {
  // Inserts seed entries
  return knex("quizzes").insert([
    {
      teacher_id:'',
      class_average: ''    
    }
  ]);
};