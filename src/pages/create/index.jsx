import React, { Component } from "react";
import { Menu } from 'antd';
import { getArticleList } from './request'
import { MailOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import Route from "../../router/children"
const { SubMenu } = Menu;
class Create extends Component {
  constructor(props) {
    super(props)
    console.log(props);
    this.state = {
      name: "2222"
    }
  }
  componentDidMount() {
    getArticleList().then(
      (res) => {
        console.log("get article response:", res);
      },
      (error) => {
        console.log("get response failed!");
      }
    );
  }
  addClick = () => {
    console.log(1111);
  }
  render() {
    return (
      <div className="name" style={{ display: 'flex' }}>
        <Menu
          onClick={this.handleClick}
          style={{ width: 256 }}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
        >
          <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
            <Menu.Item key="1"><Link to="/create/one" replace>跳到页面one</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/create/test" replace>跳到页面test</Link></Menu.Item>
          </SubMenu>
        </Menu>
        <div>
          <Route />
        </div>

      </div>
    )
  }
}
export default Create;