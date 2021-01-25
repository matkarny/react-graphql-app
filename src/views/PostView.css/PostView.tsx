
import React, { Suspense, useState } from 'react';
import { useParams } from 'react-router';

import PageHeader from '../../components/PageHeader/PageHeader';
import Title from 'antd/lib/typography/Title'
import { Content } from 'antd/lib/layout/layout';
import FormItem from 'antd/lib/form/FormItem';
import Comment from '../../components/Comment/Comment';
import CustomSkieleton from '../../components/CustomSkieleton/CustomSkieleton';
import CustomModal from '../../components/CustomModal/CustomModal';


import { Button, Input, Skeleton } from 'antd';

import { USER_ROUTE } from '../../routes/Routes';
import useFetchPost from '../../hooks/useFetchPost';
import useCreateComment from '../../hooks/useCreateComment';
import { IParams } from '../../interfaces/params';

import './PostView.css'



const PostView = () => {
  const [showComments, setShowComments] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const { userId, postId } = useParams<IParams>()
  const { loading, post, username, comments } = useFetchPost(postId)
  const { createNewComment } = useCreateComment()

  const onModalClose = () => setModalOpen(false)
  const onModalOpen = () => setModalOpen(true)
  const onSubmit = (values: any ) => {
    createNewComment(values)
    onModalClose()
  }

  return <>
    <PageHeader backLink={`${USER_ROUTE}/${userId}`} userName={username} />
    <Content className="content in-column" >
      {loading ? <Skeleton active /> :
        post ?
          <div className="post-body">
            <Title level={1}>{post.title}</Title>
            <p>{post.body}</p>
            <div className="post-button-wrapper" >
              <Button type="link" onClick={() => setShowComments(!showComments)}>
                {!showComments ? 'Show comments' : 'Hide comments'}
              </Button>
              {showComments && <Button type="link" onClick={onModalOpen}> Add comment </Button>}
            </div>
          </div> :
          <span> Post has content </span>}
      {showComments && <div className="post-comment-container">
        <Suspense fallback={<CustomSkieleton />}>
          {comments && comments.map(comment => <Comment key={`comment-${comment.id}`} {...comment} />)}
        </Suspense>
      </div>}
      <CustomModal title="Add comment" visible={modalOpen} onSubmit={onSubmit} onCancel={onModalClose}>
        <FormItem label="Name" name="name" rules={[
          {
            required: true,
            message: 'Name is required!',
          },
        ]}><Input />
        </FormItem>
        <FormItem label="Email" name="email" rules={[
          {
            required: true,
            message: 'Email is required!',
          },
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
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
    </Content>
  </>
    ;
  ;
}
export default PostView

