exports.up = function(knex, Promise) {
  return knex.schema.createTable("teachers", tbl => {
    tbl.increments();
    tbl.string("name").notNullable();
    tbl.string("username");
    tbl.string("email").notNullable();
    tbl.string("role");

    // tbl
    //   .integer('student_id')
    //   .unsigned()
    //   .notNullable()
    //   tbl.foreign('student_id').references('student_id')
    //   .inTable('student')
    //   .onDelete('RESTRICT')
    //   .onUpdate('CASCADE')

    // tbl
    //   .integer('student_name')
    //   .unsigned()
    //   .notNullable()
    //   .references('name')
    //   .inTable('student')
    //   .onDelete('RESTRICT')
    //   .onUpdate('CASCADE')
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("teachers");
};
