
exports.seed = function(knex, Promise) {
  // Inserts seed entries
  return knex("students").insert([
    {
      name: "Casey",
      username: "Casey2",
      email: "Casey@gmail.com",
      role: "Student",
    },
    {
      name: "Kelly",
      username: "Kelly2",
      email: "Kelly@gmail.com",
      role: "Student",
    },
    {
      name: "Sammy",
      username: "Sammy2",
      email: "Sammy@gmail.com",
      role: "Student",
    },
    {
      name: "Frank",
      username: "Frank2",
      email: "Frank@gmail.com",
      role: "Student",
    },
    {
      name: "Lucas",
      username: "Lucas2",
      email: "Lucas@gmail.com",
      role: "Student",
    }
  ]);
};
