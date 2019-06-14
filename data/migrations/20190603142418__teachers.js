exports.up = function(knex, Promise) {
  return knex.schema.createTable("teachers", tbl => {
    tbl.increments();
    tbl.string("name");
    tbl.string("username");
    tbl.string("email");
    tbl.string("role");

    tbl
      .integer("access_code")
      .unique()
      .unsigned()
      .references("access_code")
      .inTable("student_teacher")
      .onDelete("RESTRICT")
      .onUpdate("CASCADE");

    tbl
      .integer("user_id")
      .unsigned()
      .references("id")
      .inTable("users")
      .onDelete("RESTRICT")
      .onUpdate("CASCADE");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("teachers");
};
