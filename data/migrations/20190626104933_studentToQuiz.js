exports.up = function(knex, Promise) {
  return knex.schema.createTable("studentToQuiz", tbl => {
    tbl.increments();

    tbl
      .integer("student_id")
      .unsigned()
      .references("id")
      .inTable("students")
      .onDelete("RESTRICT")
      .onUpdate("CASCADE");

    tbl
      .integer("quiz_id")
      .unsigned()
      .references("id")
      .inTable("quizzes")
      .onDelete("RESTRICT")
      .onUpdate("CASCADE");

    tbl
      .boolean("completed")
      .notNullable()
      .defaultTo(false);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("studentToQuiz");
};
