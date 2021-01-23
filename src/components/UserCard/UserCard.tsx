import { Button, Card } from 'antd';
import React from 'react';
import { useHistory } from 'react-router';
import { IUser } from '../../interfaces/user';

import './UserCard.css'

const UserCard = (props: IUser) => {
    const { id, name, username, email, phone, website, company } = props
    const history = useHistory()
    return <div>
        <Card title={username} >
            <p>{name}</p>
            <br />
            <div className="user-links-wrapper">
                <a href={`mailto:${email}`}>{email}</a>
                <a href={`tel:${phone}`}>{phone}</a>
                <a href={`https:\\${website}`}>{website}</a>
            </div>
            <br />
            <p>{`Company: ${company.name}`}</p>
            <div className="user-button-wrapper">
                <Button size="large" onClick={() => history.push(`/user/${id}`)} style={{ alignSelf: 'center' }} className="user-button"> Details </Button>
            </div>
        </Card>
    </div>
        ;
}

export default UserCard