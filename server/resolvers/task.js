const knex = require('../knex');

const resolver = {
    Query: {
        tasks: () => {
            return knex('task').select();
        },
        task: (parent, { id }, context, info) => {
            return knex('task').where('id', id).first();
        },
        taskStatus: () => {
            return knex('task_status').select();
        },
        taskStatusItem: (parent, { id }, context, info) => {
            return knex('task_status').where('id', id).first();
        }
    },
    Mutation: {
        addTask: (parent, args, context) => {}
    }
}

module.exports = resolver;