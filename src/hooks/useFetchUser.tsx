import { useQuery } from '@apollo/client';
import notification from 'antd/lib/notification/index';
import { GET_USER_DETAILS } from '../fragments/users';
import { IUserDetailsData } from '../interfaces/user';
import { IIdVars } from '../interfaces/vars';

const useFetchUser = (userId: string) => {
  const { loading, error, data } = useQuery<IUserDetailsData, IIdVars>(GET_USER_DETAILS, {
    variables: {
      id: userId
    }
  });
  
  if (error) {
    console.log('fetch user error', error)
    notification.error({
        message: 'Fetch user data problem',
        placement: 'bottomRight'
    })
};
const username = data?.user.username
const posts = data?.user.posts.data


  return { loading, username, posts}
    ;
}
export default useFetchUser