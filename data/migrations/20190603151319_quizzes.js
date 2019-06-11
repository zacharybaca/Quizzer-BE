exports.up = function(knex, Promise) {
  return knex.schema.createTable('quizzes', tbl => {
    tbl.increments().unique();
    tbl.integer('class_average')

    tbl
      .integer('teacher_id').unique()
      .unsigned()
      .notNullable()
      .references('id').unique()
      .inTable('teachers')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE')
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('quizzes');
};