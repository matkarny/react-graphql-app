import { gql } from '@apollo/client';

export const CREATE_COMMENT = gql`
mutation CreateComment($input: CreateCommentInput!) {
  createComment(input: $input) {
    id
    name
    email
    body
  }
}
`

export const DELETE_COMMENT = gql`
mutation DeleteComment($id: ID!) {
  deleteComment(id: $id)
}
`