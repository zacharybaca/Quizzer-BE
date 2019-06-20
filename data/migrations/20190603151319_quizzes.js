exports.up = function(knex, Promise) {
  return knex.schema.createTable("quizzes", tbl => {
    tbl.increments();
    tbl.integer("class_average");
    tbl.string("quiz_name");
    tbl.string("description");

    tbl
      .integer("teacher_id")
      .unsigned()
      .references("id")
      .inTable("teachers")
      .onDelete("RESTRICT")
      .onUpdate("CASCADE");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("quizzes");
};
