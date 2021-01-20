import React, {useState} from 'react';
import client from './service/AppService';
import { ApolloProvider } from '@apollo/client';
import UsersView from './views/UsersView';
import 'antd/dist/antd.css'; 
import Layout, { Content } from 'antd/lib/layout/layout';
import './App.css'
function App() {
  
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Content className="Container">
      <UsersView />
      </Content>
      </Layout>
    </ApolloProvider>
  );
}

export default App;
