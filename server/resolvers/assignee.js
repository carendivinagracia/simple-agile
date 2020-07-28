const knex = require('../knex');
const { v4 } = require('uuid');
const uuidV4 = v4;

const resolver = {
  Query: {
    assignees: () => {
      return knex('assignee').select();
    },
    assignee: (parent, { id }, context, info) => {
      return knex('assignee').where('id', id).first();
    },
  },
  Mutation: {
    addAssignee: async (parent, args, context) => {
      const { name, email } = args.input;
      let addAssigneeResponse;

      if (name && email) {
        try {
          await knex('assignee').insert({
            id: uuidV4(),
            name,
            email,
          });

          addAssigneeResponse = {
            status: 'SUCCESS',
            action: 'ADD',
            entity: 'ASSIGNEE',
            message: 'Successfully added assignee.',
          };
        } catch (error) {
          addAssigneeResponse = {
            status: 'FAILED',
            action: 'ADD',
            entity: 'ASSIGNEE',
            message: JSON.stringify(error),
          };
        }
      } else {
        addAssigneeResponse = {
          status: 'FAILED',
          action: 'ADD',
          entity: 'ASSIGNEE',
          message: 'Error: Incomplete parameters!',
        };
      }

      return addAssigneeResponse;
    },
  },
};

module.exports = resolver;
