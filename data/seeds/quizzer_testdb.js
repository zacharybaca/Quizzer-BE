exports.seed = function(knex, Promise) {
  return knex("main")
    .truncate()
    .then(function() {
      return knex("main").insert([
        {
          entry: "test value1",
          entry2: "test value2",
        },
        {
          entry: "test value3",
          entry2: "test value4",
        },
      ]);
    });
};