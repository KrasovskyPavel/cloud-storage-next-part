import axios from "../../core/axios";
import { NextPage } from "next";
import * as Api from "../../api";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const DashboardPage: NextPage = async () => {
  const _token = cookies().get("_token")?.value;

  if (!_token) {
    redirect("/dashboard/auth");
  }

  axios.defaults.headers.Authorization = "Bearer " + _token;

  try {
    await Api.auth.getMe();
  } catch (error) {
    redirect("/dashboard/auth");
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Dashboard</h1>
    </main>
  );
};

export default DashboardPage;
