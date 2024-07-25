import axios from "../../core/axios";
import { NextPage } from "next";
import * as Api from "../../api";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { FileList, FileSelectType } from "@/components/FileList";

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
    <main>
      <FileList
        items={[]}
        onFileSelect={function (id: string, type: FileSelectType): void {
          throw new Error("Function not implemented.");
        }}
      />
    </main>
  );
};

export default DashboardPage;
