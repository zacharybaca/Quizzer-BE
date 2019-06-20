exports.seed = function(knex, Promise) {
  // Inserts seed entries
  return knex("teachers").insert([
    {
      name: "Lucy",
      username: "Lucy2",
      email: "Lucy@gmail.com",
      role: "Teacher",
      access_code: 5396
    },
    {
      name: "Johnny",
      username: "Johnny2",
      email: "Johnny@gmail.com",
      role: "Teacher",
      access_code: 1234
    },
    {
      name: "Phillip",
      username: "Phillip2",
      email: "Phillip@gmail.com",
      role: "Teacher",
      access_code: 5235
    },
    {
      name: "Agnes",
      username: "Agnes2",
      email: "Agnes@gmail.com",
      role: "Teacher",
      access_code: 4321
    },
    {
      name: "Samuel",
      username: "Samuel2",
      email: "Samuel@gmail.com",
      role: "Teacher",
      access_code: 9999
    }
  ]);
};
