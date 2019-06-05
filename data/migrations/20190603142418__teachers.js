exports.up = function(knex, Promise) {
  return knex.schema.createTable("teachers", tbl => {
    tbl.increments();
    tbl.string("name").notNullable();
    tbl.string("username");
    tbl.string("email");
    tbl.string("role");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("teachers");
};
