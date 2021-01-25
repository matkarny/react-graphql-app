import React, { useState } from 'react';

import ConfirmationModal from '../ConfirmationModal/ConfirmationModal';
import Card from 'antd/lib/card'
import Button from 'antd/lib/button';
import { DeleteOutlined } from '@ant-design/icons';

import useDeleteComment from '../../hooks/useDeleteComment';

import { IComment } from '../../interfaces/comment';

import './Comment.css'

const Comment: React.FC<IComment> = ({ body, email, id, name }) => {
  const [deleteModal, setDeleteModal] = useState(false)
  const { deleteCommentById } = useDeleteComment(id)

  const onModalClose = () => setDeleteModal(false)
  const onModalOpen = () => setDeleteModal(true)
  

  const onDeleteComment = () => {
    deleteCommentById();
    onModalClose()
  }
  return (<><Card title={name ? name : 'Anonymous'} extra={<div>{email && <a href={`mailto:${email}`} className="comment-mail">{email}</a>} <Button shape="circle" icon={<DeleteOutlined onClick={onModalOpen} />} /> </div>}>
    <p>{body ? body : "Empty comment"}</p>
    </Card>
    <ConfirmationModal actionKind="delete comment" visible={deleteModal} onOk={onDeleteComment} onCancel={onModalClose}/>
  </>)
    ;
}
export default Comment