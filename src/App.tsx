import React from 'react';
import Layout from 'antd/lib/layout/layout';

import Routes from './routes/Routes';

import './App.css'
import 'antd/dist/antd.css';


function App() {
  return (
  <Layout style={{ minHeight: "100vh" }}>
      <Routes />
  </Layout>
  );
}

export default App;
