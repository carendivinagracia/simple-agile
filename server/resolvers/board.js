const resolver = {
    Query: {
        boards: () => {

        },
        board: (parent, { id }, context, info) => {
            
        }
    },
    Mutation: {
        addBoard: (parent, args, context) => {}
    }
}

module.exports = resolver;