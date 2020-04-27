
exports.up = function(knex) {
    return knex.schema.createTable('papel', function(table){
        table.string('papel').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('papel');
};
