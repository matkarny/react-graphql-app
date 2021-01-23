import { useQuery } from '@apollo/client';
import { Content } from 'antd/lib/layout/layout';
import React from 'react';
import { useParams } from 'react-router';
import CustomSkieleton from '../../components/CustomSkieleton/CustomSkieleton';
import PageHeader from '../../components/PageHeader/PageHeader';
import PostRow from '../../components/PostRow/PostRow';
import { GET_USER_DETAILS } from '../../fragments/users';
import { IParams } from '../../interfaces/params';
import {  IUserDetailsData } from '../../interfaces/user';
import { IIdVars } from '../../interfaces/vars';


const UsersDetails = ()  => {
    const { id } = useParams<IParams>()
    const { loading, error, data } = useQuery<IUserDetailsData, IIdVars>(GET_USER_DETAILS, { variables: {
        id
    }}); 
    if (error) return <p>Error :(</p>;

    return <>
    <PageHeader backLink={`/`} userName={data?.user.username}/>
     <Content className="content">
    {loading ? <CustomSkieleton /> : data ? data.user.posts.data.map(post => <PostRow {...post}/>) : <p> No post found</p>} 
    </Content></>
    ;
  }
export default UsersDetails