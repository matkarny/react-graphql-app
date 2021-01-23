import React from 'react';
import Layout, { Content } from 'antd/lib/layout/layout';
import Routes from './routes/Routes';

import './App.css'
import 'antd/dist/antd.css';


function App() {
  return (
  <Layout style={{ height: "100%" }}>
      <Routes />
  </Layout>
  );
}

export default App;
