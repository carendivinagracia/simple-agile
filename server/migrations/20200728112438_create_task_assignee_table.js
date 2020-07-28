
exports.up = function(knex) {
    return knex.schema.createTableIfNotExists('task_assignee', function(table) {
        table.string('id', [36]).primary();
        table.string('task_id', [36]);
        table.foreign('task_id').references('task.id');
        table.string('assignee_id', [36]);
        table.foreign('assignee_id').references('assignee.id');
        table.dateTime('add_date').defaultTo(knex.fn.now(6));
        table.dateTime('update_date').defaultTo(knex.fn.now(6));
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('task_assignee');
};
