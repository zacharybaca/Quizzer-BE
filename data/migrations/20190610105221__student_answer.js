exports.up = function(knex, Promise) {
  return knex.schema.createTable('student_answers', tbl => {
    tbl.increments().unique();
    tbl.string('student_answer').notNullable();

    tbl
      .integer('student_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('students')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE') 
    
    tbl
      .integer('question_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('questions')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE')

    tbl
      .integer('quiz_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('quizzes')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE')

    tbl
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
