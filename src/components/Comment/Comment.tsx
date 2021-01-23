import React from 'react';
import { Button, Card } from "antd";
import { IComment } from '../../interfaces/post';
import { DeleteOutlined } from '@ant-design/icons';
import './Comment.css'

const Comment: React.FC<IComment> = ({ body, email, id, name }) => {

  return (<Card title={name ? name : 'Anonymous'} extra={<div>{email && <a href={`mailto:${email}`} className="comment-mail">{email}</a>} <Button shape="circle" icon={<DeleteOutlined onClick={() => console.log('delete')} />} /> </div>}>
    <p>{body ? body : "Empty comment"}</p>
  </Card>)
    ;
}
export default Comment