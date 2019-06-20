exports.up = function(knex, Promise) {
  return knex.schema.createTable("foldersToTeachers", tbl => {
    tbl.increments();

    tbl
      .integer("folder_id")
      .unsigned()
      .references("id")
      .inTable("folders")
      .onDelete("RESTRICT")
      .onUpdate("CASCADE");

    tbl
      .integer("teacher_id")
      .unsigned()
      .references("id")
      .inTable("teachers")
      .onDelete("RESTRICT")
      .onUpdate("CASCADE");

    tbl
      .integer("quiz_id")
      .unsigned()
      .references("id")
      .inTable("quizzes")
      .onDelete("RESTRICT")
      .onUpdate("CASCADE");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("folders");
};
