import React, { Component } from "react";
import { Form, Input, Button, Checkbox } from 'antd';
class One extends Component {
    constructor(props) {
        super(props)
        console.log(props);
    }
    onFinish = (values) => {
        console.log('Success:', values);
    };

    onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    }
        render() {
            return (<div  style={{display:'flex',alignItems:'center',justifyContent:'center',width:'100%',height:"100%"}}>
                <Form
                    onFinish={this.onFinish}
                    onFinishFailed={this.onFinishFailed}
                >
                    <Form.Item
                        label="菜单名称"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: '请输入菜单名称!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="菜单路由"
                        name="mumeurl"
                        rules={[
                            {
                                required: true,
                                message: '请输入菜单路由!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Button type="primary" htmlType="submit">
                        提交
                    </Button>
                </Form>
            </div>)
        }
    }

export default One