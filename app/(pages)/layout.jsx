import React from "react";
import { Col, Row } from "antd";
import TopNav from "@/component/top-nav";
export default function RootlLayout({ children }) {
  return (
    <Row className="h-screen">
      <Col span={4} className="bg-[#000000]">
        col-12
      </Col>
      <Col span={20} className="bg-secondary">
        <TopNav />
        {children}
      </Col>
    </Row>
  );
}
