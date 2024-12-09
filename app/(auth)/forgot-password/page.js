"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button, Form, Input, notification } from "antd";
import Link from "next/link";

export default function Login() {
  const router = useRouter();

  const [form] = Form.useForm();

  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    console.log("values : ", values);

    router.push("reset-password");
  };

  return (
    <>
      <div className="w-1/2 flex justify-center items-center">
        <div className=" h-screen flex flex-col justify-center w-[70%]	">
          <h1 className="text-formHeading text-primary text-left font-OpenSans font-bold">
            FORGOT PASSWORD
          </h1>
          <h3 className="font-OpenSans font-regular text-secondary text-left text-formInput">
            Reset Your Password
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
              name="email"
              label="Email"
              colon={false}
              className="mb-10"
              style={{
                fontSize: "16px",
                fontWeight: "600",
                marginTop: "1.6rem",
              }}
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
            <Form.Item>
              <Button
                type="submit"
                htmlType="submit"
                block
                className="login-form-button text-light bg-primary text-formLabel"
                loading={loading}
              >
                SUBMIT
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
    </>
  );
}
