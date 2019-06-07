exports.seed = function(knex, Promise) {
  // Inserts seed entries
  return knex("teacher").insert([
    {
      name: "Lucy",
      username: "Lucy2",
      email: "Lucy@gmail.com",
      role: "Teacher"
    },
    {
      name: "Johnny",
      username: "Johnny2",
      email: "Johnny@gmail.com",
      role: "Teacher"
    },
    {
      name: "Phillip",
      username: "Phillip2",
      email: "Phillip@gmail.com",
      role: "Teacher"
    },
    {
      name: "Agnes",
      username: "Agnes2",
      email: "Agnes@gmail.com",
      role: "Teacher"
    },
    {
      name: "Samuel",
      username: "Samuel2",
      email: "Samuel@gmail.com",
      role: "Teacher"
    }
  ]);
};

// {name: 'Lucy', username: 'Lucy2', email: 'Lucy@gmail.com', role: 'Teacher', student_id: '1'},
// {name: 'Johnny', username: 'Johnny2', email: 'Johnny@gmail.com', role: 'Teacher', student_id: '2'},
// {name: 'Phillip', username: 'Phillip2', email: 'Phillip@gmail.com', role: 'Teacher', student_id: '3'},
// {name: 'Agnes', username: 'Agnes2', email: 'Agnes@gmail.com', role: 'Teacher', student_id: '4'},
// {name: 'Samuel', username: 'Samuel2', email: 'Samuel@gmail.com', role: 'Teacher', student_id: '5'},
