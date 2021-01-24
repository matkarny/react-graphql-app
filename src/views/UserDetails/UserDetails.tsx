import { useQuery } from '@apollo/client';
import { Input } from 'antd';
import FormItem from 'antd/lib/form/FormItem';
import { Content } from 'antd/lib/layout/layout';
import React, { useState } from 'react';
import { useParams } from 'react-router';
import CustomModal from '../../components/CustomModal/CustomModal';
import CustomSkieleton from '../../components/CustomSkieleton/CustomSkieleton';
import PageHeader from '../../components/PageHeader/PageHeader';
import PostRow from '../../components/PostRow/PostRow';
import { GET_USER_DETAILS } from '../../fragments/users';
import useFetchUser from '../../hooks/useFetchUser';
import { IParams } from '../../interfaces/params';
import { IUserDetailsData } from '../../interfaces/user';
import { IIdVars } from '../../interfaces/vars';


const UsersDetails = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const { userId } = useParams<IParams>()
  const { loading, username, posts } = useFetchUser(userId)  

  const onModalClose = () => setModalOpen(false)
  const onModalOpen = () => setModalOpen(true)
  
  return <>
    <PageHeader backLink={`/`} userName={username} onAdd={onModalOpen} />
    <Content className="content">
      {loading ? <CustomSkieleton /> : posts ? posts.map(post => <PostRow {...post} />) : <p> No post found</p>}
    </Content>
    <CustomModal title="Add post" visible={modalOpen} onOk={onModalClose} onCancel={onModalClose}>
      <form>
        <FormItem label="Title" name="title"><Input /></FormItem>
        <FormItem label="Body" name="body"><Input.TextArea style={{ height: "200px" }} /></FormItem>
      </form>
    </CustomModal>
  </>
    ;
}
export default UsersDetails