import React from "react";
import { Col, Row } from "antd";
import TopNav from "@/component/top-nav";
import Sidebar from "@/component/sidebar";

export default function RootlLayout({ children }) {
  return (
    <Row className="h-screen">
      <Col span={4}>
        <Sidebar />
      </Col>
      <Col span={20}>
        <TopNav />
        <div className="p-4">
          <div className="pb-4 ">
            <span className="text-modalTitle text-primary  font-bold">
              Greetings,
            </span>
            <h1 className="text-formHeading font-semibold">John Smith</h1>
          </div>
          {children}
        </div>
      </Col>
    </Row>
  );
}
