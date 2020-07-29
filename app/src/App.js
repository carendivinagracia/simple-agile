import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import Home from './components/home/Home';
import BoardList from './components/board/BoardList';
import Board from './components/board/Board';
import NotFound from './components/error/NotFound';
import 'antd/dist/antd.css';
import './App.css';

const { Header, Content, Sider, Footer } = Layout;

function App() {
  return (
    <BrowserRouter>
      <Layout className='app-main-layout'>
        <Header>
          <h1 className='header-title'>Simple Agile</h1>
        </Header>
        <Layout>
          <Sider width={200}>
            <Menu
              mode='inline'
              defaultSelectedKeys={['home']}
              className='app-menu'
            >
              <Menu.Item key='home'>
                <Link to='/'>Home</Link>
              </Menu.Item>
              <Menu.Item key='boards'>
                <Link to='/boards'>Boards</Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Content className='app-content'>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/boards' component={BoardList} />
                <Route exact path='/boards/:boardId' component={Board} />
                <Route path='*' component={NotFound} />
              </Switch>
            </Content>
            <Footer className='app-footer'>©2020</Footer>
          </Layout>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
