
exports.up = function(knex, Promise) {
  return knex.schema.createTable("student_scores", tbl => {
      tbl.increments();

      tbl
        .integer("teacher_id")
        .unsigned()
        .references("id")
        .inTable("teachers")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE")

      tbl
        .integer("student_id")
        .unsigned()
        .references('id')
        .inTable('quiz_student')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('student_scores');
};
