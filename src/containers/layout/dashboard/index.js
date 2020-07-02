import React from "react";
import  './style.css';
import { Layout, Menu, Breadcrumb,  Avatar} from 'antd';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";

import Icon ,{
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

import Home from "../pages/Home";
import About from "../pages/About";
import ContentAdd from "../pages/Content";
import pageRoutes from "../../../config/router";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


class Dashboard extends React.Component {
  state = {
    collapsed: false,

  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };


  
  render() {

    console.log(pageRoutes.name);
      
    return (
   
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo" >
         
              </div>
          <Menu theme="dark" defaultSelectedKeys={['0']} mode="inline">
            {/* <Menu.Item  key="0"  style={{ textAlign:"center" }}>
            <Avatar  size="large" icon={<UserOutlined />} style={{ marginBottom:20 }}/>
            </Menu.Item> */}
          
          {pageRoutes.map((data , i) => {
            console.log(data.icon);
            return (
              <Menu.Item key={i} icon={data.icon}>
            <Link to={data.link}>{data.name}</Link>
            </Menu.Item>
            );
          })}

         
            {/* <SubMenu key="sub1" icon={<UserOutlined />} title="User">
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu> */}
            {/* <Menu.Item key="9" icon={<FileOutlined />} /> */}
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            {/* <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb> */}
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                <Switch>
                  <Route path="/about">
                    <About />
                  </Route>
                  <Route path="/content">
                  <ContentAdd />
                  </Route>
                  <Route path="/">
                    <Home />
                  </Route>
               </Switch>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Develop by Irfan</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default Dashboard;
// ReactDOM.render(<SiderDemo />, mountNode);