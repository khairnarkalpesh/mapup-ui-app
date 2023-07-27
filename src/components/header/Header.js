import React, { useState } from "react";
import { Menu, Dropdown, Button, Modal, Tabs, Form, Input } from "antd";
import {
  UserOutlined,
  LoginOutlined,
  UserAddOutlined,
  LockOutlined,
} from "@ant-design/icons";
import "./styles.css";

const { TabPane } = Tabs;

const Header = () => {
  const [isLoginModalVisible, setLoginModalVisible] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setLoginModalVisible(true);
  };

  const handleLogoutClick = () => {
    setLoggedIn(false);
  };

  const handleLoginModalClose = () => {
    // Simulate successful login. Replace this with actual backend authentication logic.
    // For demonstration purposes, we're just setting loggedIn to true here.
    setLoggedIn(true);
    setLoginModalVisible(false);
  };

  const handleRegisterSubmit = (values) => {
    // Simulate successful registration. Replace this with actual backend registration logic.
    // For demonstration purposes, we're just setting loggedIn to true here.
    setLoggedIn(true);
    setLoginModalVisible(false);
  };

  const menu = (
    <Menu>
      <Menu.Item key="1">My Account</Menu.Item>
      <Menu.Item key="2" onClick={handleLogoutClick}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <header className="header-container">
      {/* Circular Profile Icon */}
      {loggedIn ? (
        <Dropdown overlay={menu} trigger={["click"]}>
          <Button
            shape="circle"
            icon={<UserOutlined />}
            style={{ fontSize: "18px", color: "#1890ff", border: "none" }}
          />
        </Dropdown>
      ) : (
        <Button
          shape="round"
          icon={<LoginOutlined />}
          style={{ background: "#1890ff", color: "#fff", border: "none" }}
          onClick={handleLoginClick}
        >
          Login
        </Button>
      )}

      {/* Login Popup Form */}
      <Modal
        title="Login / Register"
        visible={isLoginModalVisible}
        onCancel={() => setLoginModalVisible(false)}
        footer={null}
      >
        <Tabs defaultActiveKey="login" size="large">
          <TabPane tab="Login" key="login">
            <Form onFinish={handleLoginModalClose}>
              <Form.Item name="username">
                <Input prefix={<UserOutlined />} placeholder="Username" />
              </Form.Item>
              <Form.Item name="password">
                <Input.Password
                  prefix={<LockOutlined />}
                  placeholder="Password"
                />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" block>
                  Login
                </Button>
              </Form.Item>
            </Form>
          </TabPane>
          <TabPane tab="Register" key="register">
            <Form onFinish={handleRegisterSubmit}>
              <Form.Item name="username">
                <Input prefix={<UserAddOutlined />} placeholder="Username" />
              </Form.Item>
              <Form.Item name="password">
                <Input.Password
                  prefix={<LockOutlined />}
                  placeholder="Password"
                />
              </Form.Item>
              <Form.Item name="confirmPassword">
                <Input.Password
                  prefix={<LockOutlined />}
                  placeholder="Confirm Password"
                />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" block>
                  Register
                </Button>
              </Form.Item>
            </Form>
          </TabPane>
        </Tabs>
      </Modal>
    </header>
  );
};

export default Header;
