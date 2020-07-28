const resolver = {
    Query: {
        assignees: () => {
            return knex('assignee').select();
        },
        assignee: (parent, { id }, context, info) => {
            return knex('assignee').where('id', id).first();
        }
    },
    Mutation: {
        addAssignee: (parent, args, context) => {}
    }
}

module.exports = resolver;