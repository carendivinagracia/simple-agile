const { gql } = require('apollo-server');

const taskStatus = gql`
    type TaskStatus {
        id: ID!
        name: String!
        description: String!
    }

    extend type Query {
        taskStatus: [TaskStatus!]!
    }
`;

module.exports = taskStatus;