"use client"
import getTask from "@/app/actions/getTask";
import CustomModal from "@/component/custom-modal";
import RingChart from "@/component/ring-chart";
import TaskCard from "@/component/taskCard";
import { FileDoneOutlined, FileTextOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Col, DatePicker, Flex, Form, Input, Modal, Radio, Row, Upload } from "antd"
import { useEffect, useState } from "react";

const { TextArea } = Input;

export default function DashboardDetail() {
    const [tasks, setTasks] = useState();
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [fileList, setFileList] = useState([]);

    const [form] = Form.useForm();

    const handleFileChange = ({ fileList: newFileList, file: newFile }) => {
        setFileList(newFileList);
    }

    const handleCloseModal = () => {
        setIsOpenModal(false)
    }
    const handleSubmit = (values) => {

        console.log("values :", values)

        setIsOpenModal(false)
    }
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
                                    onClick={() => { setIsOpenModal(true) }}
                                >
                                    <PlusOutlined />
                                    Add Task
                                </Button>
                            </div>
                        </Flex>
                        <Flex wrap gap="small" className='tasklisting overflow-y-scroll	h-[400px] py-2' >
                            {tasks &&
                                tasks.map((item, index) => {
                                    return (
                                        <div className=" xl:[48%] lg:w-[100%%] md:[100%] " key={index}>
                                            <TaskCard tasks={item} />
                                        </div>
                                    );
                                })}
                        </Flex>
                    </div>
                </Col>
                <Col span={10} className="">
                    <div className="shadow rounded p-4">
                        <div className="shadow rounded p-4 flex justify-between items-center" >
                            <RingChart color={'rgb(21 128 61)'} totalValue={100} obtainValue={50} title={"Completed"} />
                            <RingChart color={'rgb(220 38 38)'} totalValue={100} obtainValue={60} title={"Not Started"} />
                            <RingChart color={'rgb(37 99 235 )'} totalValue={100} obtainValue={70} title={"In Progress"} />
                        </div>
                        <div className="shadow rounded p-4 mt-4 " >
                            <p className="text-primary text-staffDetail font-semibold pb-4">
                                <FileDoneOutlined className="mr-2" />

                                Completed Task
                            </p>

                            <Flex wrap gap="small" className='tasklisting overflow-y-scroll	h-[200px] py-2' >
                                {tasks &&
                                    tasks.map((item, index) => {
                                        return (
                                            <div className="xl:[48%] lg:w-[100%%] md:[100%] " key={index}>
                                                <TaskCard tasks={item} />
                                            </div>
                                        );
                                    })}
                            </Flex>

                        </div>
                    </div>
                </Col>
            </Row>
            {isOpenModal && <CustomModal isModalOpen={isOpenModal} handleClose={handleCloseModal} handleSubmit={handleSubmit} title={'Add New Task'} content={
                (<Form
                    layout="vertical"
                    disabled={false}
                    className="w-full"
                    onFinish={handleSubmit}
                >
                    <Row >
                        <Col span={24} className="pr-4">
                            <Form.Item
                                required={false}
                                label="Title"
                                name="name"
                                colon={false}
                                className="mt-3 mb-2 w-full"
                                style={{ fontSize: "16px", fontWeight: "600" }}
                                validateTrigger="onSubmit"
                                rules={[
                                    { required: true, message: "Please Enter Task Name" },
                                ]}
                            >
                                <Input
                                    placeholder="Enter Task Name"
                                    style={{ fontSize: "12px", fontWeight: "400" }}
                                />
                            </Form.Item>
                        </Col>
                        <Col span={12} className="pr-4">
                            <Form.Item
                                required={false}
                                label="Start Date"
                                name="start-date"
                                colon={false}
                                className="mt-3 mb-2 w-full"
                                style={{ fontSize: "16px", fontWeight: "600" }}
                                validateTrigger="onSubmit"
                                rules={[
                                    { required: true, message: "Please Enter Start Date" },
                                ]}
                            >
                                <DatePicker className="w-full" />
                            </Form.Item>
                        </Col>
                        <Col span={12} className="pr-4">
                            <Form.Item
                                required={false}
                                label="End Date"
                                name="end-date"
                                colon={false}
                                className="mt-3 mb-2 w-full"
                                style={{ fontSize: "16px", fontWeight: "600" }}
                                validateTrigger="onSubmit"
                                rules={[
                                    { required: true, message: "Please Enter End Date" },
                                ]}
                            >
                                <DatePicker className="w-full" />
                            </Form.Item>
                        </Col>
                        <Col span={12} className="pr-4">
                            <Form.Item
                                form={form}
                                required={false}
                                label="Upload Image"
                                name="image"
                                colon={false}
                                className="mt-3 mb-2 w-full"
                                style={{ fontSize: "16px", fontWeight: "600" }}
                                validateTrigger="onSubmit"
                                rules={[
                                    { required: true, message: "Please Upload Picture" },
                                ]}
                            >
                                <Upload action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                                    listType="picture-card"
                                    fileList={fileList}
                                    onChange={handleFileChange}>
                                    {fileList.length >= 1 ? null : (<button
                                        style={{
                                            border: 0,
                                            background: 'none',
                                        }}
                                        type="button"
                                    >
                                        <PlusOutlined />
                                        <div
                                            style={{
                                                marginTop: 8,
                                            }}
                                        >
                                            Upload
                                        </div>
                                    </button>)}

                                </Upload>
                            </Form.Item>
                        </Col>
                        <Col span={12} className="pr-4">
                            <Form.Item
                                form={form}
                                required={false}
                                label="Priority"
                                name="priority"
                                colon={false}
                                className="mt-3 mb-2 w-full"
                                style={{ fontSize: "16px", fontWeight: "600" }}
                                validateTrigger="onSubmit"
                                rules={[
                                    { required: true, message: "Please Select Priority" },
                                ]}
                            >
                                <Radio.Group >
                                    <Radio className="block" value="low">Low</Radio>
                                    <Radio className="block" value="high">High</Radio>
                                    <Radio className="block" value="moderate">Moderate</Radio>
                                </Radio.Group>
                            </Form.Item>
                        </Col>
                        <Col span={24} className="pr-4">
                            <Form.Item
                                required={false}
                                label="Description"
                                name="description"
                                colon={false}
                                className="mt-3 mb-2 w-full"
                                style={{ fontSize: "16px", fontWeight: "600" }}
                                validateTrigger="onSubmit"
                                rules={[
                                    { required: true, message: "Please Enter Description" },
                                ]}
                            >
                                <TextArea rows={4} className="w-ful" />
                            </Form.Item>
                        </Col>
                        <Col span={24} className="">
                            <Form.Item className="text-center">
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    inline="true"
                                    className=" mt-4 bg-primary text-formLabel hover:bg-secondary "

                                >
                                    Add New Task
                                </Button>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>)} />}

        </section>
    );
}