exports.up = function(knex, Promise) {
  return knex.schema.createTable("teachers", tbl => {
    tbl.increments().unique();
    tbl.string("name").notNullable();
    tbl.string("username");
    tbl.string("email").notNullable();
    tbl.string("role");

    tbl.unique()
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
  return knex.schema.dropTableIfExists("teachers");
};
