import React from 'react';

import UserCard from '../../components/UserCard/UserCard';
import { Content } from 'antd/lib/layout/layout';
import Row from 'antd/lib/row'
import Col from 'antd/lib/col'
import Card from 'antd/lib/card'

import useFetchUsers from '../../hooks/useFetchUsers';



const UsersView = () => {
  const { loading, users} = useFetchUsers()
  return <Content className="content">
            <Row gutter={[24, 24]} align="middle">
            {loading && <>{[...Array(9)].map((el, i) => <Col span={6} key={i}> <Card loading /></Col>)}</>}
            {users ? users.map((user) => <Col span={6}> <UserCard {...user} /></Col>) : !loading && <p> Users no found </p>}
            </Row>
          </Content>
}

export default UsersView