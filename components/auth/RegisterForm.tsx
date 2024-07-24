"use client";
import React from "react";
import styles from "./Auth.module.scss";
import { Button, Form, Input, notification } from "antd";
import { RegisterFormDTO } from "@/api/dto/auth.dto";
import * as Api from "../../api";
import { setCookie } from "nookies";

const onSubmit = async (values: RegisterFormDTO) => {
  try {
    const { token } = await Api.auth.register(values);

    notification.success({
      message: "Вы успешно зарегистрировались!",
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
    console.warn("LoginRegister", error);
  }
};

const RegisterForm = () => {
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
        <Form.Item<RegisterFormDTO>
          label="E-mail"
          name="email"
          rules={[{ required: true, message: "Укажите почту" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<RegisterFormDTO>
          label="Имя"
          name="fullName"
          rules={[{ required: true, message: "Укажите имя пользователя" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<RegisterFormDTO>
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

export default RegisterForm;
