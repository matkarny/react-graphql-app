import { Button, Card, Typography } from 'antd';
import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { RightOutlined, DeleteOutlined } from '@ant-design/icons'
import { IPost } from '../../interfaces/post';
import Title from 'antd/lib/typography/Title'

import './PostRow.css'
import ConfirmationModal from '../ConfirmationModal/ConfirmationModal';

const PostRow = (props: IPost) => {
  const { id, title } = props
  const [deleteModal, setDeleteModal] = useState(false)

  const onModalClose = () => setDeleteModal(false)
  const onModalOpen = () => setDeleteModal(true)

  const location = useLocation()
  const history = useHistory()
  console.log(location)
  return <>
  <div className="ant-card ant-card-bordered card-custom">
    <div className="heading-container">
      <Button type="link" className="button-delete" onClick={onModalOpen}>
        <DeleteOutlined className="post-icon post-icon-delete" />
      </Button>
      <Title level={4}>{title.length > 30 ? title.slice(0,30).padEnd(33, '.') : title}</Title>
    </div>
    <Button type="link" onClick={() => history.push(`${location.pathname}/${id}`)} > <RightOutlined className="post-icon" /> </Button>
  </div>
  <ConfirmationModal actionKind="delete post" visible={deleteModal} onOk={onModalClose} onCancel={onModalClose}/>
  </>
    ;
}

export default PostRow