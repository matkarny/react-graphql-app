import React from 'react';
import  { Header } from 'antd/lib/layout/layout';
import { useHistory } from 'react-router-dom';
import { Button } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import  Title  from 'antd/lib/typography/Title'

interface IPageHeaderProps{
  backLink: string
  userName?: string;
}
const PageHeader: React.FC<IPageHeaderProps> = ({userName, backLink})  => {
    const history = useHistory()

    return <Header style={{background:"none"}}>
        <div className="in-row">
        <Button icon={<ArrowLeftOutlined />} type="text" onClick={() => history.push(`${backLink}`)}> 
         Back </Button>
       <Title level={3}>{userName}</Title>
       </div>
    </Header>
    ;
  }
export default PageHeader