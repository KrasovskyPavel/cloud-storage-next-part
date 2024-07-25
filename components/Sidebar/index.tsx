"use client";

import React from "react";
import styles from "./Sidebar.module.scss";
import { Button, Menu } from "antd";
import { DeleteOutlined, FileImageOutlined, FileOutlined } from "@ant-design/icons";
import { usePathname, useRouter } from "next/navigation";
import UploadButton from "../UploadButton";

export const Sidebar: React.FC = () => {
  const router = useRouter();
  const selectedMenu = usePathname();

  return (
    <div className={styles.sideber}>
      <UploadButton />
      <Menu
        className={styles.menu}
        mode="inline"
        selectedKeys={[selectedMenu]}
        items={[
          {
            key: "/dashboard",
            icon: <FileOutlined />,
            label: "Файлы",
            onClick: () => router.push("/dashboard"),
          },
          {
            key: "/dashboard/photos",
            icon: <FileImageOutlined />,
            label: "Фото",
            onClick: () => router.push("/dashboard/photos"),
          },
          {
            key: "/dashboard/trash",
            icon: <DeleteOutlined />,
            label: "Корзина",
            onClick: () => router.push("/dashboard/trash"),
          },
        ]}
      />
    </div>
  );
};
