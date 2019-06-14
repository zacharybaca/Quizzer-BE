exports.seed = function(knex, Promise) {
  // Inserts seed entries
  return knex("student_teacher").insert([
    {
      teacher_id: 1,
      student_id: 1,
      relationship: "Authorized"
    },
    {
      teacher_id: 1,
      student_id: 2,
      relationship: "Authorized"
    },
    {
      teacher_id: 1,
      student_id: 3,
      relationship: "Authorized"
    },
    {
      teacher_id: 2,
      student_id: 1,
      relationship: "Authorized"
    }
  ]);
};
