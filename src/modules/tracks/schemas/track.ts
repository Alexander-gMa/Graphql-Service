import { gql } from 'apollo-server';

export default gql`
type Track {
  id: ID!
  title: String!
  albums: [Album]
  bands: [Band]
  duration: Int
  released: Int
  genres: [Genre]
}

type Query {
  traks(limit: Int, offset: Int): [Track]
  trak(id: ID!): Track
}`;