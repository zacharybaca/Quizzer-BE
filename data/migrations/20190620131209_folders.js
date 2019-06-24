exports.up = function(knex, Promise) {
  return knex.schema.createTable("folders", tbl => {
    tbl.increments();
    tbl.string("folder_name");
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
  return knex.schema.dropTableIfExists("folders");
};
