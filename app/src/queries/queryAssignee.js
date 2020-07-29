import { gql } from '@apollo/client';

export const GET_ALL_ASSIGNEES = gql`
  query GetAllAssignees {
    assignees {
      id
      name
      email
    }
  }
`;
