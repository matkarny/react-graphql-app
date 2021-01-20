import { Button, Card } from 'antd';
import React from 'react';
import { IUserData } from '../../interfaces/user';

const UserCard = (props: IUserData)  => {
    const {id, name, username, email, phone, website, company} = props
  
  return <div>
      <Card title={username} >

          <p>{name}</p>
          <a href={`mailto:${email}`}>{email}</a>
          <a href={`tel:${phone}`}>{phone}</a>
          <a href={`https:\\${website}`}>{website}</a>
          <p>{company.name}</p>
          <Button> Details </Button>
      </Card>
  </div>
  ;
}

export default UserCard