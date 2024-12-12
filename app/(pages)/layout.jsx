import React from "react";
import { Col, Row } from "antd";
import TopNav from "@/component/top-nav";
import Sidebar from "@/component/sidebar";

export default function RootlLayout({ children }) {
  return (
    <Row className="h-screen">
      <Col span={4} className="">
        <Sidebar />
      </Col>
      <Col span={20} >
        <TopNav />
        <div className="p-2" >{children}</div>
      </Col>
    </Row>
  );
}
