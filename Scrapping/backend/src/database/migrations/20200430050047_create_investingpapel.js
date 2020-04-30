
exports.up = function(knex) {
    return knex.schema.createTable('investingpapel', function(table){
        table.string('investingpapel').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('investingpapel');
};
