import React from 'react';
import  { Header } from 'antd/lib/layout/layout';
import { useHistory } from 'react-router-dom';
import { Button } from 'antd';
import { ArrowLeftOutlined, PlusOutlined } from '@ant-design/icons';
import  Title  from 'antd/lib/typography/Title'
import Skeleton from 'antd/lib/skeleton'


import './PageHeader.css'

interface IPageHeaderProps{
  backLink: string
  userName?: string;
  onAdd?: () => void
}
const PageHeader: React.FC<IPageHeaderProps> = ({userName, backLink, onAdd})  => {
    const history = useHistory()

    return <Header style={{background:"none"}}>
        <div className="header-container">
        <Button icon={<ArrowLeftOutlined className="header-back-icon"/>} type="link" onClick={() => history.push(`${backLink}`)} className="header-back"> 
         Back</Button>
       <Title level={3}>{userName ? userName : <Skeleton.Input style={{ width: 200 }} active/>}</Title>
       {onAdd ? userName ? <Button shape="circle" type="primary" size="large" icon={<PlusOutlined />} onClick={onAdd}/> : <Skeleton.Button shape="circle"/> : <p>{` `}</p>}
       </div>
    </Header>
    ;
  }
export default PageHeader