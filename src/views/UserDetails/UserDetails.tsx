
import React, { useState } from 'react';
import { useParams } from 'react-router';

import CustomModal from '../../components/CustomModal/CustomModal';
import CustomSkieleton from '../../components/CustomSkieleton/CustomSkieleton';
import PageHeader from '../../components/PageHeader/PageHeader';
import PostRow from '../../components/PostRow/PostRow';
import Input from 'antd/lib/input';
import FormItem from 'antd/lib/form/FormItem';
import { Content } from 'antd/lib/layout/layout';

import useFetchUser from '../../hooks/useFetchUser';
import useCreatePost from '../../hooks/useCreatePost';

import { IParams } from '../../interfaces/params';

const UsersDetails = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const { userId } = useParams<IParams>()
  const { loading, username, posts } = useFetchUser(userId)  
  const { createNewPost } = useCreatePost()
  
  const onModalClose = () => setModalOpen(false)
  const onModalOpen = () => setModalOpen(true)
  
  const onSubmit = ( values: any) => {
    createNewPost({...values})
    onModalClose()
  }

  return <>
    <PageHeader backLink={`/`} userName={username} onAdd={onModalOpen} />
    <Content className="content">
      {loading ? <CustomSkieleton /> : posts ? posts.map(post => <PostRow {...post} />) : <p> No post found</p>}
    </Content>
    <CustomModal title="Add post" visible={modalOpen} onSubmit={onSubmit} onCancel={onModalClose}>
        <FormItem label="Title" name="title" rules={[
          {
            required: true,
            message: 'Title is required!',
          },
        ]}><Input />
        </FormItem>
        <FormItem label="Body" name="body" rules={[
          {
            required: true,
            message: 'Body is required!',
          },
        ]} ><Input.TextArea style={{ height: "200px" }} /></FormItem>
    </CustomModal>
  </>
    ;
}
export default UsersDetails