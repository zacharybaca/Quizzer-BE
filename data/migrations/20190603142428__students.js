
exports.up = function(knex, Promise) {
    return knex.schema.createTable('student', tbl => {
          tbl.increments()
          tbl.string('name').notNullable();
          tbl.string('username');
          tbl.string('email').notNullable();
          tbl.string('role').notNullable();

          // tbl
          //   .integer('teacher_id')
          //   .unsigned()
          //   .notNullable()
          //   .references('id')
          //   .inTable('teacher')
          //   .onDelete('RESTRICT')
          //   .onUpdate('CASCADE')

          // tbl
          //   .integer('teacher_name')
          //   .unsigned()
          //   .notNullable()
          //   .references('name')
          //   .inTable('teacher')
          //   .onDelete('RESTRICT')
          //   .onUpdate('CASCADE')  
      });
};
  
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('student');
};
