"use client";
import getTask from "@/app/actions/getTask";
import TaskCard from "@/component/taskCard";
import { FileTextOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Col, Flex, Row } from "antd";
import React, { useEffect, useState } from "react";

export default function Dashboard() {
  const [tasks, setTasks] = useState();

  useEffect(() => {
    const TaskData = getTask();
    setTasks(TaskData);
  }, []);

  return (
    <section className="">
      <Row className="justify-between">
        <Col span={14} className="pr-4">
          <div className="shadow rounded p-4">
            <Flex justify="space-between" className="pb-4">
              <p className="text-primary text-staffDetail font-semibold">
                <FileTextOutlined className="mr-2" />
                To-Do
              </p>
              <div>
                <Button
                  type="secondary"
                  className="border-none text-primary hover:text-secondary bg-transparent shadow-none"
                >
                  <PlusOutlined />
                  Add Task
                </Button>
              </div>
            </Flex>
            <Flex wrap gap="large">
              {tasks &&
                tasks.map((item, index) => {
                  return (
                    <div className="w-[48%]" key={index}>
                      <TaskCard tasks={item}  />
                    </div>
                  );
                })}
            </Flex>
          </div>
        </Col>
        <Col span={10} className="">
          <div className="shadow rounded p-4">main content</div>
        </Col>
      </Row>
    </section>
  );
}
