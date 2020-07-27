const resolver = {
    Query: {
        assignees: () => {

        },
        assignee: (parent, { id }, context, info) => {
        
        }
    },
    Mutation: {
        addAssignee: (parent, args, context) => {}
    }
}

module.exports = resolver;