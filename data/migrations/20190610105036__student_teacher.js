exports.up = function(knex, Promise) {
  return knex.schema.createTable('student_teacher', tbl => {
    tbl.increments().unique();

    tbl
      .integer('teacher_id').unique()
      .unsigned()
      .notNullable()
      .references('id').unique()
      .inTable('teachers')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE')
        
    tbl
      .integer('student_id').unique()
      .unsigned()
      .notNullable()
      .references('id').unique()
      .inTable('students')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE') 
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('student_teacher');
};
