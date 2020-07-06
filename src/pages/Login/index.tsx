import React from 'react'
import { Form, Input, Button, Checkbox, message } from 'antd';
import Cookie from 'js-cookie'
import styles from './index.less'

export default (props: any) => {
  const { history } = props

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const onFinish = (values: any) => {
    const { username, password } = values
    if (username === 'yjc' && password === '123456') {
      Cookie.set('userId', '2537')
      history.push('/layout')
    } else {
      message.error('用户名/密码错误')
    }
  };

  return (
    <Form
      {...layout}
      className={styles.form}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        label="用户名"
        name="username"
        rules={[{ required: true, message: '用户名不能为空!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="密码"
        name="password"
        rules={[{ required: true, message: '密码不能为空!' }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>记住密码</Checkbox>
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          登录
        </Button>
      </Form.Item>
    </Form>
  );
};
