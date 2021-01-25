import { gql } from '@apollo/client';

export const GET_POST_DATA = gql`
query GetPostData($postId: ID!){
  post(id: $postId){
    id,
   	title,
    body,
    user{
      username
    }
    comments{
      data{
        id,
        name,
        email,
        body
      }
    }
  }
}
`
export const CREATE_POST = gql`
mutation CreatePost( $input: CreatePostInput!) {
  createPost(input: $input) {
    id
    title
    body
  }
}
`

export const DELETE_POST = gql`
mutation DeletePost($id: ID!) {
  deletePost(id: $id)
}
`