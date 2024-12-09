"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button, Form, Input, notification } from "antd";
import { CloseCircleFilled, CheckCircleFilled } from "@ant-design/icons";
import Link from "next/link";

export default function Login() {
  const router = useRouter();

  const [form] = Form.useForm();

  const [loading, setLoading] = useState(false);

  // function called after login clicked
  const onFinish = (values) => {
    let result = apiCall(values);
  };

  return (
    <div className="w-1/2 flex justify-center items-center">
      <div className=" h-screen flex flex-col justify-center	 w-[70%]">
        <h1 className="text-formHeading text-primary text-left font-OpenSans font-bold">
          RESET PASSWORD
        </h1>
        <h3 className="font-OpenSans font-regular text-secondary text-left text-formInput">
          Set Your New Password
        </h3>
        <Form
          // name="normal_login"
          name="trigger"
          className="login-form"
          layout="vertical"
          form={form}
          onFinish={onFinish}
        >
          <Form.Item
            required={false}
            id="password"
            name="password"
            label="New Password"
            colon={false}
            style={{ fontSize: "16px", fontWeight: "600" }}
            validateTrigger="onSubmit"
            className="mt-6 mb-4"
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
              type="submit"
              htmlType="submit"
              block
              className="login-form-button bg-primary text-light text-formLabel"
              loading={loading}
            >
              RESET PASSWORD
            </Button>
          </Form.Item>
        </Form>
        <p className="text-center text-normal text-secondary text-formLabel">
          <Link href={"/login"} className="text-primary font-semibold ml-1">
            Back to Login
          </Link>
        </p>
      </div>
    </div>
  );
}
