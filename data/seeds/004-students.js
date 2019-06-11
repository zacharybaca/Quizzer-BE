
exports.seed = function(knex, Promise) {
  // Inserts seed entries
  return knex("students").insert([
    {
      name: "Casey",
      username: "Casey2",
      email: "Casey@gmail.com",
      role: "Student",
      user_id: ''
    },
    {
      name: "Kelly",
      username: "Kelly2",
      email: "Kelly@gmail.com",
      role: "Student",
      user_id: ''
    },
    {
      name: "Sammy",
      username: "Sammy2",
      email: "Sammy@gmail.com",
      role: "Student",
      user_id: ''
    },
    {
      name: "Frank",
      username: "Frank2",
      email: "Frank@gmail.com",
      role: "Student",
      user_id: ''
    },
    {
      name: "Lucas",
      username: "Lucas2",
      email: "Lucas@gmail.com",
      role: "Student",
      user_id: ''
    }
  ]);
};
