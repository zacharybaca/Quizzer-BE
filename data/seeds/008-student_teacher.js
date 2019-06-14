exports.seed = function(knex, Promise) {
  // Inserts seed entries
  return knex("student_teacher").insert([
    {
      teacher_id: 1,
      student_id: 1,
      access_code: 5396,
      relationship: "Authorized"
    },
    {
      teacher_id: 1,
      student_id: 2,
      access_code: 5396,
      relationship: "Authorized"
    },
    {
      teacher_id: 1,
      student_id: 3,
      access_code: 5396,
      relationship: "Authorized"
    },
    {
      teacher_id: 2,
      student_id: 1,
      access_code: 1234,
      relationship: "Authorized"
    }
  ]);
};
