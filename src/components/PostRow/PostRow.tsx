import { Button, Card, Typography } from 'antd';
import React from 'react';
import { useHistory, useLocation } from 'react-router';
import { RightOutlined, DeleteOutlined } from '@ant-design/icons'
import { IPost } from '../../interfaces/post';
import Title from 'antd/lib/typography/Title'

import './PostRow.css'

const PostRow = (props: IPost) => {
  const { id, title } = props
  const location = useLocation()
  const history = useHistory()
  console.log(location)
  return <div className="ant-card ant-card-bordered card-custom">
    <div className="heading-container">
      <Button type="link" className="button-delete" >
        <DeleteOutlined className="post-icon post-icon-delete" />
      </Button>
      <Title level={4}>{title.length > 30 ? title.slice(0,30).padEnd(33, '.') : title}</Title>
    </div>
    <Button type="link" onClick={() => history.push(`${location.pathname}/${id}`)} > <RightOutlined className="post-icon" /> </Button>
  </div>
    ;
}

export default PostRow