import LoginForm from "@/components/auth/LoginForm";
import RegisterForm from "@/components/auth/RegisterForm";
import { Tabs } from "antd";
import { NextPage } from "next";
import Head from "next/head";

const AuthPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dashboard / Auth</title>
      </Head>
      <main style={{ width: 400, margin: "50px auto" }}>
        <Tabs
          items={[
            {
              key: "1",
              label: "Войти",
              children: <LoginForm />,
            },
            {
              key: "2",
              label: "Регистрация",
              children: <RegisterForm />,
            },
          ]}
        />
      </main>
    </>
  );
};

export default AuthPage;
