"use client";
import { useRouter } from "next/navigation";
import { Button, Col, Form, Input, Row , notification} from "antd";
import { CheckCircleFilled, CloseCircleFilled } from "@ant-design/icons";
import { useState } from "react";

export default function Register() {
  const router = useRouter();
  const [api, contextHolder] = notification.useNotification();
  const [isloading, setIsloading] = useState(false);
  const [form] = Form.useForm();

  const onFinish = async (formValues) => {
    setIsloading(true);
    const data = {
      first_name: formValues.first_name,
      last_name: formValues.last_name,
      username: formValues.username,
      email: formValues.email,
      phone: formValues.phone,
      password: formValues.password,
    };

    const response = await fetch(`http://localhost:3000/api/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (response.status == 200) {
      setIsloading(false);
      openNotificationWithIcon("success", `logged In Successfully`);
      router.push("/login");
    } else {
      setIsloading(false);
      openNotificationWithIcon("error", `${result.error}`);
    }
  };

  const openNotificationWithIcon = (type, title) => {
    api[type]({
      duration: "2",
      message: <div style={{ fontWeight: "bold" }}>{title}</div>,
      description: (
        <div style={{ fontWeight: "normal" }}>Lorem ipsum dolor semet</div>
      ),
      icon:
        type === "error" ? (
          <CloseCircleFilled
            style={{
              color: "#ff4d4f",
            }}
          />
        ) : (
          <CheckCircleFilled
            style={{
              color: "#95de64",
            }}
          />
        ),
    });
  };

  return (
    <>
      <div className="w-1/2 flex justify-center items-center">
        {contextHolder}
        <div className="flex flex-col justify-center w-[70%]">
          <h1 className="text-formHeading text-primary text-left font-bold">
            REGISTER
          </h1>
          <h3 className="font-regular text-secondary text-left text-formInput">
            Lets Get Started
          </h3>
          <Form
            name="trigger"
            className="login-form"
            layout="vertical"
            form={form}
            onFinish={onFinish}
          >
            <Row className="justify-between">
              <Col span={11}>
                <Form.Item
                  required={false}
                  label="First Name"
                  name="first_name"
                  colon={false}
                  className="mt-6 mb-4"
                  style={{ fontSize: "16px", fontWeight: "600" }}
                  validateTrigger="onSubmit"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Name",
                    },
                  ]}
                >
                  <Input
                    allowClear
                    placeholder="Enter Name"
                    style={{ fontSize: "12px", fontWeight: "400" }}
                  />
                </Form.Item>
              </Col>
              <Col span={11}>
                <Form.Item
                  required={false}
                  label="Last Name"
                  name="last_name"
                  colon={false}
                  className="mt-6 mb-4"
                  style={{ fontSize: "16px", fontWeight: "600" }}
                  validateTrigger="onSubmit"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Name",
                    },
                  ]}
                >
                  <Input
                    allowClear
                    placeholder="Enter Name"
                    style={{ fontSize: "12px", fontWeight: "400" }}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item
              required={false}
              label="Email"
              name="email"
              colon={false}
              className=""
              style={{ fontSize: "16px", fontWeight: "600" }}
              validateTrigger="onSubmit"
              rules={[
                { required: true, message: "Email is required" },
                { type: "email", message: "Please enter a correct Email" },
              ]}
            >
              <Input
                allowClear
                placeholder="Enter Email"
                style={{ fontSize: "12px", fontWeight: "400" }}
              />
            </Form.Item>
            <Row className="justify-between">
              <Col span={11}>
                {" "}
                <Form.Item
                  required={false}
                  label="Username"
                  name="username"
                  colon={false}
                  className=""
                  style={{ fontSize: "16px", fontWeight: "600" }}
                  validateTrigger="onSubmit"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Name",
                    },
                  ]}
                >
                  <Input
                    allowClear
                    placeholder="Enter Name"
                    style={{ fontSize: "12px", fontWeight: "400" }}
                  />
                </Form.Item>
              </Col>
              <Col span={11}>
                <Form.Item
                  required={false}
                  label="Phone"
                  name="phone"
                  colon={false}
                  className=""
                  style={{ fontSize: "16px", fontWeight: "600" }}
                  validateTrigger="onSubmit"
                  rules={[{ required: true, message: "Phone is required" }]}
                >
                  <Input
                    allowClear
                    placeholder="Enter Phone Number"
                    style={{ fontSize: "12px", fontWeight: "400" }}
                  />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item
              required={false}
              id="password"
              name="password"
              label="Password"
              colon={false}
              style={{ fontSize: "16px", fontWeight: "600" }}
              validateTrigger="onSubmit"
              className=""
              rules={[
                {
                  required: true,
                  message: "Password is required",
                },
              ]}
            >
              <Input.Password
                allowClear
                placeholder="Enter Password"
                style={{ fontSize: "12px", fontWeight: "400" }}
              />
            </Form.Item>

            <Form.Item
              required={false}
              id="confirm_password"
              name="confirm_password"
              label="Confirm New Password"
              colon={false}
              style={{ fontSize: "16px", fontWeight: "600" }}
              validateTrigger="onSubmit"
              className="mb-7 "
              dependencies={["password"]}
              rules={[
                {
                  required: true,
                  message: "Confirm Password is required",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject("Passwords do not match.");
                  },
                }),
              ]}
            >
              <Input.Password
                allowClear
                placeholder="Enter Password"
                style={{ fontSize: "12px", fontWeight: "400" }}
              />
            </Form.Item>

            <Form.Item>
              <Button
                className="login-form-button text-light  text-formLabel bg-primary "
                htmlType="submit"
                loading={isloading}
                block
              >
                CONTINUE
              </Button>
            </Form.Item>
          </Form>
          <p className="text-center text-black text-formLabel">
            Already have an account?
            <a href={"/login"} className="text-primary font-semibold ml-1">
              Login Now
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
