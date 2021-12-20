import React, { Component } from "react";
import { Menu } from 'antd';
import { getArticleList } from './request'

class Create extends Component {
  constructor(props) {
    super(props)
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
      <div className="name">
        <button onClick={this.addClick}>{this.state.name}</button>


      </div>
    )
  }
}
export default Create;