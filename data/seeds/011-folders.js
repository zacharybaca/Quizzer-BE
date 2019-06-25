exports.seed = function(knex, Promise) {
  // Inserts seed entries
  return knex("folders").insert([
    {
      folder_name: "Math",
      teacher_id: 1
    },
    {
      folder_name: "Science",
      teacher_id: 1
    },
    {
      folder_name: "Science tests",
      teacher_id: 2
    }
  ]);
};
