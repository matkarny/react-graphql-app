import React, { useState } from 'react';
import { Button, Card } from "antd";
import { IComment } from '../../interfaces/post';
import { DeleteOutlined } from '@ant-design/icons';
import './Comment.css'
import ConfirmationModal from '../ConfirmationModal/ConfirmationModal';

const Comment: React.FC<IComment> = ({ body, email, id, name }) => {
  const [deleteModal, setDeleteModal] = useState(false)

  const onModalClose = () => setDeleteModal(false)
  const onModalOpen = () => setDeleteModal(true)

  return (<><Card title={name ? name : 'Anonymous'} extra={<div>{email && <a href={`mailto:${email}`} className="comment-mail">{email}</a>} <Button shape="circle" icon={<DeleteOutlined onClick={onModalOpen} />} /> </div>}>
    <p>{body ? body : "Empty comment"}</p>
  </Card>
  <ConfirmationModal actionKind="delete comment" visible={deleteModal} onOk={onModalClose} onCancel={onModalClose}/>
  </>)
    ;
}
export default Comment