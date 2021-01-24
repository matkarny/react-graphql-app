import React, { useState } from 'react';
import { Button, Card, notification } from "antd";
import { IComment } from '../../interfaces/post';
import { DeleteOutlined } from '@ant-design/icons';
import './Comment.css'
import ConfirmationModal from '../ConfirmationModal/ConfirmationModal';
import { useMutation } from '@apollo/client';
import { DELETE_POST } from '../../fragments/post';

const Comment: React.FC<IComment> = ({ body, email, id, name }) => {
  const [deleteModal, setDeleteModal] = useState(false)

  const onModalClose = () => setDeleteModal(false)
  const onModalOpen = () => setDeleteModal(true)
  
  const [deletePost, { error, data }] = useMutation<any, any>(DELETE_POST)
  console.log(id)

  const onDeleteComment = async () => {
    await deletePost({variables: { id: parseInt(id) }}).then(data => console.log(data ));
    // try{
    //   await deletePost({variables: { id: parseInt(id) }});
    //   await data.deletePost && notification.success({
    //     message: 'Deleted comment succesfully',
    //     placement: 'bottomRight'
    //   });

    // } catch (e) {
    //  e && notification.error({
    //     message: 'Deleted comment error',
    //     placement: 'bottomRight'
    //   });
    // } finally {
    //   onModalClose()
    // }
    
  }
  return (<><Card title={name ? name : 'Anonymous'} extra={<div>{email && <a href={`mailto:${email}`} className="comment-mail">{email}</a>} <Button shape="circle" icon={<DeleteOutlined onClick={onModalOpen} />} /> </div>}>
    <p>{body ? body : "Empty comment"}</p>
  </Card>
  <ConfirmationModal actionKind="delete comment" visible={deleteModal} onOk={onDeleteComment} onCancel={onModalClose}/>
  </>)
    ;
}
export default Comment