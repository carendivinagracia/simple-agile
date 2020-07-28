const knex = require('../knex');

const resolver = {
    Query: {
        boards: () => {
            return knex('board').select();
        },
        board: (parent, { id }, context, info) => {
            return knex('board').where('id', id).first();
        }
    },
    Mutation: {
        addBoard: (parent, args, context) => {}
    }
}

module.exports = resolver;