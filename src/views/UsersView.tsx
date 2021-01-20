import React from 'react';
import { useQuery } from '@apollo/client';
import { IUsersData } from '../interfaces/user';
import UserCard from '../components/userDetails/userDetails';
import { Col, Row } from 'antd';
import { GET_USERS } from '../fragments/users';



const UsersView = ()  => {
  const { loading, error, data } = useQuery<IUsersData>(GET_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return <Row gutter={[16, 16]} align="middle">
            {data?.users.data.map((user) => <Col span={8}> <UserCard {...user}/></Col> )}
        </Row>
  ;
}

export default UsersView