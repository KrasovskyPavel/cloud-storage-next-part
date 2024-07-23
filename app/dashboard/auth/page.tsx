import LoginForm from "@/components/auth/LoginForm";
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
              children: "Content of Tab Pane 2",
            },
          ]}
        />
      </main>
    </>
  );
};

export default AuthPage;
