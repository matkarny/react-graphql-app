import { gql } from '@apollo/client';

export const GET_USERS = gql`
{
  users{
    data{
        id,
        name,
        username,
        email,
        phone,
        website,
        company{
        name
        }
    }
}
}
`

export const GET_USER_DETAILS = gql`
  query GetUserData($id: ID!) {
    user(id: $id){
    id,
    username,
    posts{
    	data{
        id
        title
      }
  }
  }
}
`