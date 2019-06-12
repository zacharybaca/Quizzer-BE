exports.seed = function(knex, Promise) {
  // Inserts seed entries
  return knex("users").insert([
    {
      name: "Michael",
      username: "Michael_Lewis",
      email: "MLewis@gmail.com"
    },
    {
      name: "Agnes",
      username: "Agnes_Thomas",
      email: "AThomas@gmail.com"
    },
    {
      name: "Ruth",
      username: "Ruth_Richards",
      email: "RRichards@gmail.com"
    },
    {
      name: "Bennie",
      username: "Bennie_Hearse",
      email: "BHearse@gmail.com"
    },
    {
      name: "Louisa",
      username: "Louisa_Kenny",
      email: "LKenny@gmail.com"
    }
  ]);
};
