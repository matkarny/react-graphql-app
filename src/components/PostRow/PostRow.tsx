import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';

import ConfirmationModal from '../ConfirmationModal/ConfirmationModal';
import Title from 'antd/lib/typography/Title'
import Button from 'antd/lib/button';
import { RightOutlined, DeleteOutlined } from '@ant-design/icons'

import { IPost } from '../../interfaces/post';

import './PostRow.css'
import useDeletePost from '../../hooks/useDeletePost';

const PostRow = (props: IPost) => {
  const { id, title } = props
  
  const [deleteModal, setDeleteModal] = useState(false)
  const { deletePostById} = useDeletePost(id)
  const location = useLocation()
  const history = useHistory()
  
  const onModalClose = () => setDeleteModal(false)
  const onModalOpen = () => setDeleteModal(true)

  const onDeletePost = () => {
    deletePostById();
    onModalClose()
  }

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
  <ConfirmationModal actionKind="delete post" visible={deleteModal} onOk={onDeletePost} onCancel={onModalClose}/>
  </>
    ;
}

export default PostRow