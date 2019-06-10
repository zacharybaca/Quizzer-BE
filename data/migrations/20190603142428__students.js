exports.up = function(knex, Promise) {
  return knex.schema.createTable("students", tbl => {
    tbl.increments();
    tbl.string("name").notNullable();
    tbl.string("username");
    tbl.string("email").notNullable();
    tbl.string("role");

    tbl
      .integer('user_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete("RESTRICT")
      .onUpdate("CASCADE");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("students");
};
