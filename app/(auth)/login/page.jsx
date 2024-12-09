"use client";
import { Button, Checkbox, Form, Input } from "antd";
import Link from "next/link";

export default function Login() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  return (
    <div className="w-1/2 flex justify-center items-center">
      <div className="w-[70%]">
        <h1 className="text-formHeading">Welcome to Management System</h1>
        <h3 className="py-2 text-modalTitle">Let's Get Started</h3>
        <Form
          name="login-form"
          form={form}
          layout="vertical"
          onFinish={onFinish}
        >
          <Form.Item
            required={false}
            name="email"
            label="Email"
            colon={false}
            className="mt-6 mb-4"
            style={{ fontSize: "16px", fontWeight: "600" }}
            validateTrigger="onSubmit"
            rules={[
              { required: true, message: "Email is required" },
              { type: "email", message: "Please enter a correct Email" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            required={false}
            id="password"
            name="password"
            label="Password"
            colon={false}
            style={{ fontSize: "16px", fontWeight: "600" }}
            validateTrigger="onSubmit"
            className="mb-2 "
            rules={[{ required: true, message: "Password is required" }]}
          >
            <Input.Password />
          </Form.Item>
          <div className="text-end">
            <Link href={"/forgot-password"} className="text-primary hover:text-secondary">
              Forgot Password ?
            </Link>
          </div>
          <Form.Item label={null} >
            <Button
              type="submit"
              className="bg-primary mt-4  w-full text-light"
              htmlType="submit"

            >
              Login
            </Button>
          </Form.Item>
        </Form>
        <p className="text-center font-OpenSans text-normal text-black text-formLabel">
          {`Don't have an account?`}
          <a
            href={"/register"}
            className="text-primary hover:text-secondary font-semibold ml-1"
          >
            Register Now
          </a>
        </p>
      </div>
    </div>
  );
}
