const { gql } = require('apollo-server');

const assignee = gql`
  type Assignee {
    id: ID!
    name: String!
    email: String!
    add_date: DateTime!
  }

  input AddAssigneeInput {
    name: String!
    email: String!
  }

  extend type Query {
    assignees: [Assignee!]!
    assignee(id: ID!): Assignee
  }

  extend type Mutation {
    addAssignee(input: AddAssigneeInput!): MutationResult!
  }
`;

module.exports = assignee;
