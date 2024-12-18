import React from "react";
import { Col, Row } from "antd";
import TopNav from "@/component/top-nav";
import Sidebar from "@/component/sidebar";
import Greetings from "@/component/greetings";

export default function PageLayout({ children }) {
  return (
    <Row className="h-screen">
      <Col span={4}>
        <Sidebar />
      </Col>
      <Col span={20}>
        <TopNav />
        <div className="p-4">
          <Greetings />
          {children}
        </div>
      </Col>
    </Row>
  );
}
