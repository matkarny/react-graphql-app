import { useQuery } from '@apollo/client';
import { Content } from 'antd/lib/layout/layout';
import React, { Suspense, useState } from 'react';
import { useParams } from 'react-router';
import PageHeader from '../../components/PageHeader/PageHeader';
import { GET_POST_DATA } from '../../fragments/post';
import { IParams } from '../../interfaces/params';
import { IPostDetailsData } from '../../interfaces/post';
import  Title  from 'antd/lib/typography/Title'
import { Button, Skeleton } from 'antd';

import './PostView.css'
import Comment from '../../components/Comment/Comment';
import CustomSkieleton from '../../components/CustomSkieleton/CustomSkieleton';




const PostView = ()  => {
  const [showComments, setShowComments] = useState(false)
  const { id, postId } = useParams<IParams>()
    const { loading, error, data } = useQuery<IPostDetailsData>(GET_POST_DATA, { variables: {
      postId
  }}) ; 
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
        console.log(data)
    return <>
    <PageHeader backLink={`/${id}`} userName={data?.post.user.username}/>
     <Content className="content in-column" >
     <div className="post-body">
     <Title level={3}>{data?.post.title}</Title>
     <p>{data?.post.body}</p>
     </div>
     <div className="post-button-wrapper" > 
      <Button type="link" onClick={() => setShowComments(!showComments)}> 
      {!showComments ? 'Show comments' : 'Hide comments'}
      </Button>
      {showComments && <Button type="link"> 
      Add comment
      </Button>}
     </div>
     {showComments && <div>
       <Suspense fallback={<CustomSkieleton/>}>
       {data?.post.comments.data.map(comment => <Comment key={`comment-${comment.id}`} {...comment}/>)}
       </Suspense>
     </div>}
    </Content>
    </>
    ;
    ;
  }
export default PostView

