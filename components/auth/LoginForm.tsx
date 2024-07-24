"use client";
import React from "react";
import styles from "./Auth.module.scss";
import { Button, Form, Input, message, notification } from "antd";
import { LoginFormDTO } from "@/api/dto/auth.dto";
import * as Api from "../../api";
import { setCookie } from "nookies";

const onSubmit = async (values: LoginFormDTO) => {
  try {
    const { token } = await Api.auth.login(values);

    notification.success({
      message: "Вы успешно авторизованы!!",
      description: "Переходим в админ-панель ...",
      duration: 2,
    });

    setCookie(null, "_token", token, {
      path: "/",
    });
  } catch (error) {
    notification.error({
      message: "Ошибка авторизации!",
      duration: 2,
    });
    console.warn("LoginForm", error);
  }
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
        <Form.Item<LoginFormDTO>
          label="E-mail"
          name="email"
          rules={[{ required: true, message: "Укажите почту" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<LoginFormDTO>
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
