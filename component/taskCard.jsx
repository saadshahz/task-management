"use client";
import { Col, Row } from "antd";
import Image from "next/image";
import Link from "next/link";
import taskImg from "../styles/images/demotask.jpg";
import { Divider } from "antd";
export default function TaskCard(props) {
  const { tasks } = props;
  switch (tasks.status) {
    case "notStarted":
      tasks.status = "Not Started";
      break;

    case "inProgress":
      tasks.status = "In Progress";
      break;

    case "completed":
      tasks.status = "Completed";
      break;
  }
  switch (tasks.priority) {
    case "high":
      tasks.priority = "High";
      break;

    case "moderate":
      tasks.priority = "Moderate";
      break;

    case "low":
      tasks.priority = "Low";
      break;
  }

  return (
    <Link
      href={"#"}
      className="flex shadow rounded border border-transparent hover:border-primary hover:border items-start justify-start text-black hover:text-black p-4"
    >
      <div className="w-full">
        <div className="flex pb-2 justify-between items-center">
          <span
            className={`block  rounded-full w-2 h-2 ${
              tasks.status == "Completed"
                ? "bg-green-700"
                : tasks.status == "In Progress"
                ? "bg-blue-600"
                : "bg-red-600"
            } `}
          ></span>
          <p>
            Created on
            <span className="ml-4 font-semibold">{tasks.createdOn}</span>
          </p>
        </div>
        <Row>
          <Col span={16}>
            <h3 className="font-semibold pb-2 text-dashTitle">{tasks.name}</h3>
            <p>{tasks.description}</p>
          </Col>
          <Col span={8}>
            <Image
              src={taskImg}
              className="w-full h-full rounded"
              width={1000}
              height={100}
              alt="Task Image"
            />
          </Col>
        </Row>
        <Divider />
        <div className="flex  justify-between items-center">
          <span className="text-formInput">
            Priority :{" "}
            <span
              className={`ml-2 font-semibold ${
                tasks.priority == "Low"
                  ? "text-green-700"
                  : tasks.priority == "Moderate"
                  ? "text-blue-600"
                  : "text-red-600"
              }`}
            >
              {tasks.priority}
            </span>
          </span>
          <p className="text-formInput">
            Status :{" "}
            <span
              className={`ml-2 font-semibold ${
                tasks.status == "Completed"
                  ? "text-green-700"
                  : tasks.status == "In Progress"
                  ? "text-blue-600"
                  : "text-red-600"
              }`}
            >
              {tasks.status}
            </span>
          </p>
        </div>
      </div>
    </Link>
  );
}
