import React from "react";
import { Alert, Space, Spin } from "antd";
const Spiner = () => (
  <Space direction="vertical">
    <Space className="w-[90vw] h-[80vh] flex justify-center items-center overflow-hidden">
      <Spin tip="Loading" size="large">
        <div className="content" />
      </Spin>
    </Space>
  </Space>
);
export default Spiner;
