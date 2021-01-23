import React from 'react';
import { useQuery } from '@apollo/client';
import { IUsersData } from '../../interfaces/user';
import UserCard from '../../components/UserCard/UserCard';
import { Card, Col, Row } from 'antd';
import { GET_USERS } from '../../fragments/users';
import { Content } from 'antd/lib/layout/layout';



const UsersView = () => {
  const { loading, error, data } = useQuery<IUsersData>(GET_USERS);

  if (error) return <p>Error :(</p>;
  return <Content className="content">
            <Row gutter={24} align="middle">
              {loading ? <>{[...Array(9)].map((el, i) => <Col span={8} key={i}> <Card loading /></Col>)}</> :
                data ? data.users.data.map((user) => <Col span={8}> <UserCard {...user} /></Col>) : <p> Users no found </p>}
            </Row>
          </Content>
}

export default UsersView