const resolver = {
    Query: {
        tasks: () => {

        },
        task: (parent, { id }, context, info) => {
            
        },
        taskStatus: () => {}
    },
    Mutation: {
        addTask: (parent, args, context) => {}
    }
}

module.exports = resolver;