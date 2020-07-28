const knex = require('../knex');
const { v4 } = require('uuid');
const uuidV4 = v4;

const resolver = {
  Query: {
    boards: () => {
      return knex('board').select();
    },
    board: (parent, { id }, context, info) => {
      return knex('board').where('id', id).first();
    }
  },
  Board: {
    tasks: ({ id }) => {
      return knex('task').where('board_id', id);
    }
  },
  Mutation: {
    addBoard: async (parent, args, context) => {
      const { name, startDate, endDate } = args.input;
      let addBoardResponse;

      if (name && startDate && endDate) {
        try {
          await knex('board').insert({
            id: uuidV4(),
            name,
            completed: false,
            start_date: startDate,
            end_date: endDate,
          });

          addBoardResponse = {
            status: 'SUCCESS',
            action: 'ADD',
            entity: 'BOARD',
            message: 'Successfully added board.',
          };
        } catch (error) {
          addBoardResponse = {
            status: 'FAILED',
            action: 'ADD',
            entity: 'BOARD',
            message: JSON.stringify(error),
          };
        }
      } else {
        addBoardResponse = {
          status: 'FAILED',
          action: 'ADD',
          entity: 'BOARD',
          message: 'Error: Incomplete parameters!',
        };
      }

      return addBoardResponse;
    }
  }
}

module.exports = resolver;