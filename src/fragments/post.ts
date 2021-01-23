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
