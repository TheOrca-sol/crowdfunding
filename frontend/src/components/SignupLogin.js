import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from 'react-oauth-google';
import { Button, Checkbox, Form, Input, Row, Col, Tabs, Card, Modal } from 'antd';
import { UserOutlined, LockOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import './Signup.css';

const clientId = 'YOUR_CLIENT_ID.apps.googleusercontent.com';

const { TabPane } = Tabs;

const Signup = ({visible, setVisible}) => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    const handleLoginSuccess = (response) => {
        console.log('Login Success:', response);
    };

    const handleLoginFailure = (error) => {
        console.error('Login Failed:', error);
    };
    const handleClose = () => {
        setVisible(false);
    }

    return (
        <Modal
            visible={visible}
            onCancel={handleClose}
            footer={null}  // Removes default footer buttons
            centered
        >
        <GoogleOAuthProvider clientId={clientId}>
            <Card style={{ maxWidth: '600px', margin: 'auto', marginTop: '20px' }}>
                <Tabs defaultActiveKey="1" centered>
                    <TabPane tab="Sign Up" key="1">
                        <Form
                            form={form}
                            name="signup_form"
                            className="signup-form"
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                        >
                            <h3>Inscrivez-vous pour découvrir nos opportunités et participer à nos ventes</h3>
                            <Form.Item
                                name="email"
                                rules={[{ required: true, message: 'Please input your Email!' }]}
                            >
                                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" size="large" />
                            </Form.Item>

                            <Form.Item
                                name="password"
                                rules={[{ required: true, message: 'Please input your Password!' }]}
                            >
                                <Input.Password
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    placeholder="Password"
                                    size="large"
                                    iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                />
                            </Form.Item>

                            <Form.Item style={{ marginBottom: 0 }}>
                                <Row justify="space-between">
                                    <Col>
                                        <Form.Item name="remember" valuePropName="checked" noStyle>
                                            <Checkbox>Remember me</Checkbox>
                                        </Form.Item>
                                    </Col>
                                    <Col>
                                        <a className="login-form-forgot" href="#">
                                            Forgot password
                                        </a>
                                    </Col>
                                </Row>
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="signup-form-button" size="large">
                                    Sign Up
                                </Button>
                            </Form.Item>

                            <Form.Item>
                                <a href="#">already have an account?</a>
                            </Form.Item>

                            <Form.Item>
                                <GoogleLogin
                                    onSuccess={handleLoginSuccess}
                                    onError={handleLoginFailure}
                                    useOneTap
                                />
                            </Form.Item>
                        </Form>
                    </TabPane>
                    <TabPane tab="Login" key="2">
                        {/* Login form goes here */}
                        <Form
                            form={form}
                            name="signup_form"
                            className="signup-form"
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                        >
                            <h3>Inscrivez-vous pour découvrir nos opportunités et participer à nos ventes</h3>
                            <Form.Item
                                name="email"
                                rules={[{ required: true, message: 'Please input your Email!' }]}
                            >
                                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" size="large" />
                            </Form.Item>

                            <Form.Item
                                name="password"
                                rules={[{ required: true, message: 'Please input your Password!' }]}
                            >
                                <Input.Password
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    placeholder="Password"
                                    size="large"
                                    iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                />
                            </Form.Item>

                            <Form.Item style={{ marginBottom: 0 }}>
                                <Row justify="space-between">
                                    <Col>
                                        <Form.Item name="remember" valuePropName="checked" noStyle>
                                            <Checkbox>Remember me</Checkbox>
                                        </Form.Item>
                                    </Col>
                                    <Col>
                                        <a className="login-form-forgot" href="#">
                                            Forgot password
                                        </a>
                                    </Col>
                                </Row>
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="signup-form-button" size="large">
                                    Login
                                </Button>
                            </Form.Item>

                            <Form.Item>
                                <a href="#">already have an account?</a>
                            </Form.Item>

                            <Form.Item>
                                <GoogleLogin
                                    onSuccess={handleLoginSuccess}
                                    onError={handleLoginFailure}
                                    useOneTap
                                />
                            </Form.Item>
                        </Form>
                    </TabPane>
                </Tabs>
            </Card>
        </GoogleOAuthProvider>
        </Modal>
    );
};

export default Signup;
