exports.seed = function(knex, Promise) {
  // Inserts seed entries
  return knex("folders").insert([
    {
      folder_name: "Math"
    },
    {
      folder_name: "Science"
    }
  ]);
};
