exports.up = function(knex, Promise) {
    return knex.schema.createTable('main', function(tbl) {
        tbl
        .increments();

        tbl
        .string('entry', 256)  
        .unique()
        
        tbl
        .string('entry2', 255)
        .notNullable() 
        
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('main');
};