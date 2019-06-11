exports.up = function(knex, Promise) {
  return knex.schema.createTable('student_answers', tbl => {
    tbl.increments().unique();
    tbl.string('student_answer').notNullable();

    tbl.unique()
      .integer('student_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('students')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE') 
    
    tbl.unique()
      .integer('question_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('questions')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE')

    tbl.unique()
      .integer('quiz_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('quizzes')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE')

    tbl.unique()
      .integer('correct_answer')
      .unsigned()
      .notNullable()
      .references('correct_answer')
      .inTable('questions')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE') 
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('student_answers');
};
