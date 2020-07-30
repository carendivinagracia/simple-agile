exports.up = function (knex) {
  return knex.schema.createTableIfNotExists('task', function (table) {
    table.string('id', [36]).primary();
    table.string('name');
    table.string('description');
    table.string('task_status_id', [36]);
    table.foreign('task_status_id').references('task_status.id');
    table.string('board_id', [36]);
    table.foreign('board_id').references('board.id');
    table.dateTime('add_date').defaultTo(knex.fn.now(6));
    table.dateTime('update_date').defaultTo(knex.fn.now(6));
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('task');
};
