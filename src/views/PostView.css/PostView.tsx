import { useQuery } from '@apollo/client';
import { Content } from 'antd/lib/layout/layout';
import React, { Suspense, useState } from 'react';
import { useParams } from 'react-router';
import PageHeader from '../../components/PageHeader/PageHeader';
import { GET_POST_DATA } from '../../fragments/post';
import { IParams } from '../../interfaces/params';
import { IPostDetailsData } from '../../interfaces/post';
import Title from 'antd/lib/typography/Title'
import { Button, Input, Skeleton } from 'antd';

import './PostView.css'
import Comment from '../../components/Comment/Comment';
import CustomSkieleton from '../../components/CustomSkieleton/CustomSkieleton';
import CustomModal from '../../components/CustomModal/CustomModal';
import FormItem from 'antd/lib/form/FormItem';
import { USER_ROUTE } from '../../routes/Routes';




const PostView = () => {
  const [showComments, setShowComments] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const { id, postId } = useParams<IParams>()
  const { loading, error, data } = useQuery<IPostDetailsData>(GET_POST_DATA, {
    variables: {
      postId
    }
  });
  if (error) return <p>Error :(</p>;

  const onModalClose = () => setModalOpen(false)
  const onModalOpen = () => setModalOpen(true)

  return <>
    <PageHeader backLink={`${USER_ROUTE}/${id}`} userName={data?.post.user.username} />
    <Content className="content in-column" >
      {loading ? <Skeleton active /> :
        data ?
          <div className="post-body">
            <Title level={1}>{data?.post.title}</Title>
            <p>{data?.post.body}</p>
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
          {data?.post.comments.data.map(comment => <Comment key={`comment-${comment.id}`} {...comment} />)}
        </Suspense>
      </div>}
      <CustomModal title="Add comment" visible={modalOpen} onOk={onModalClose} onCancel={onModalClose}>
        <form>
          <FormItem label="Title" name="title"><Input /></FormItem>
          <FormItem label="Email" name="email"><Input /></FormItem>
          <FormItem label="Body" name="body"><Input.TextArea style={{ height: "200px" }} /></FormItem>
        </form>
      </CustomModal>
    </Content>
  </>
    ;
  ;
}
export default PostView

