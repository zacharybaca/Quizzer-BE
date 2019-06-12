exports.seed = function(knex, Promise) {
  // Inserts seed entries
  return knex("quiz_student").insert([
    {
      score: 10,
    }
  ]);
};
