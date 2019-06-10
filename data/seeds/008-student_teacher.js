exports.seed = function(knex, Promise) {
  // Inserts seed entries
  return knex("student_teacher").insert([
    {
      teacher_id: '',
      student_id: ''
    }
  ]);
};
