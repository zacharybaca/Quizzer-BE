exports.seed = function(knex, Promise) {
  // Inserts seed entries
  return knex("student_teacher").insert([
    {
      teacher_id: 1,
      student_id: 6,
    }
  ]);
};
