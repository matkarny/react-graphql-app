import { Button, Card } from 'antd';
import React from 'react';
import { useHistory } from 'react-router';
import { IUser } from '../../interfaces/user';

const UserCard = (props: IUser) => {
    const { id, name, username, email, phone, website, company } = props
    const history = useHistory()
    return <div>
        <Card title={username} >
            <p>{name}</p>
            <br />
            <div className="in-column">
                <a href={`mailto:${email}`}>{email}</a>
                <a href={`tel:${phone}`}>{phone}</a>
                <a href={`https:\\${website}`}>{website}</a>
            </div>
            <br />
            <p>{`Company: ${company.name}`}</p>
            <Button onClick={() => history.push(`/user/${id}`)}> Details </Button>
        </Card>
    </div>
        ;
}

export default UserCard