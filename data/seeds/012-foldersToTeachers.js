exports.seed = function(knex, Promise) {
  // Inserts seed entries
  return knex("foldersToTeachers").insert([
    {
      folder_id: 1,
      quiz_id: 1
    },
    {
      folder_id: 1,
      quiz_id: 2
    }
  ]);
};
