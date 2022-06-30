import { gql } from 'apollo-server';

export default gql`
type Member {
    artistId: ID!
    instrument: String
    years: [Int]
}`