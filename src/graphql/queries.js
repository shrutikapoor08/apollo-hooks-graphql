import gql from "graphql-tag";

export const GET_SONGS = gql`
  query albums($actor: String) {
    songs(where: { actor: $actor }) {
      name
      id
      actor
      lyrics
    }
  }
`;
