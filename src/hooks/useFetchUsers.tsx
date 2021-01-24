import { useQuery } from '@apollo/client';
import notification from 'antd/lib/notification/index';

import { IUsersData } from '../interfaces/user';
import { GET_USERS } from '../fragments/users';




const useFetchUsers = () => {
    const { loading, error, data } = useQuery<IUsersData>(GET_USERS);

    if (error) {
        console.log('fetch user error', error)
        notification.error({
            message: 'Fetch users data problem',
            placement: 'bottomRight'
        })
    };

    const users = data?.users.data

    return { loading, users}
}

export default useFetchUsers