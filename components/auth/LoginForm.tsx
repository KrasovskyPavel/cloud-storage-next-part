"use client";

import React from "react";
import styles from "./Auth.module.scss";

import { Button, Form, Input } from "antd";

type FieldType = {
  email?: string;
  password?: string;
};

const onSubmit = (values: FieldType) => {
  console.log(values);
};

const LoginForm = () => {
  return (
    <div className={styles.formBlock}>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600, paddingTop: 20 }}
        initialValues={{ remember: true }}
        onFinish={onSubmit}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="E-mail"
          name="email"
          rules={[{ required: true, message: "Укажите почту" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Пароль"
          name="password"
          rules={[{ required: true, message: "Укажите пароль" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Оправить
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginForm;
