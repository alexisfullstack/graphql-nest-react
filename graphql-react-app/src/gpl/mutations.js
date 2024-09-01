import { gql } from '@apollo/client';

export const CREATE_ALBUM = gql`
  mutation CreateAlbum($input: CreateAlbumInput!) {
    createAlbum(createAlbumInput: $input) {
      id
      name
      year
    }
  }
`;