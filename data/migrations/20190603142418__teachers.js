exports.up = function(knex, Promise) {
  return knex.schema.createTable("teachers", tbl => {
    tbl.increments();
    tbl.string("name");
    tbl.string("username");
    tbl.string("email");
    tbl.string("role");

    tbl
      .integer('user_id')
      .unsigned()
      .references('id')
      .inTable('users')
      .onDelete("RESTRICT")
      .onUpdate("CASCADE");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("teachers");
};
