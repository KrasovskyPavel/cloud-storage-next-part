import { CloudUploadOutlined } from "@ant-design/icons";
import { Button, message, notification, Upload, UploadFile } from "antd";
import React, { useState } from "react";
import * as Api from "@/api";

const UploadButton: React.FC = () => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const onUploadSuccess = async (options: any) => {
    try {
      const file = await Api.files.uploadFile(options);

      console.log(file);
      setFileList([]);
    } catch (error) {
      notification.error({
        message: "Ошибка!",
        description: "Не удаось загрузить файл",
        duration: 2,
      });
    }
  };

  return (
    <Upload
      customRequest={onUploadSuccess}
      fileList={fileList}
      onChange={({ fileList }) => setFileList(fileList)}
    >
      <Button type="primary" icon={<CloudUploadOutlined />} size="large">
        Загрузить файл
      </Button>
    </Upload>
  );
};

export default UploadButton;
