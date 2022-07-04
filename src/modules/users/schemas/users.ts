import { gql } from 'apollo-server';

export default gql`
  type User {
    id: ID!
    firstName: String
    secondName: String
    password: String
    email: String!
  }

  type JWT {
    jwt: String
  }
  type Query {
    user(id: ID!): User
    login(email: String, password: String): JWT
    jwt: JWT
  }
  type Mutation {
    register(
      firstName: String!
      lastName: String!
      password: String!
      email: String!
    ): User
  }
`;
