"use client";
import { CheckCircleFilled, CloseCircleFilled } from "@ant-design/icons";
import { Button, notification, Form, Input } from "antd";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const [form] = Form.useForm();

  const [api, contextHolder] = notification.useNotification();
  const [isloading, setIsloading] = useState(false);
  const router = useRouter();

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

  const onFinish = async (credentials) => {
    setIsloading(true);
    console.log("Clicked");

    const result = await signIn("credentials", {
      email: credentials.email,
      password: credentials.password,
      redirect: false,
      callbackUrl: "/",
    });

    if (result.status == 200) {
      openNotificationWithIcon("success", `logged In Successfully`);
      router.push("/dashboard");
    } else {
      openNotificationWithIcon("error", `${result.error}`);
    }

    console.log("Success:", result);
    setIsloading(false);
  };

  return (
    <div className="w-1/2 flex justify-center items-center">
      {contextHolder}
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
            <Input disabled={isloading} />
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
            <Input.Password disabled={isloading} />
          </Form.Item>
          <div className="text-end">
            <Link
              href={"/forgot-password"}
              className="text-primary hover:text-secondary"
            >
              Forgot Password ?
            </Link>
          </div>
          <Form.Item>
            <Button
              htmlType="submit"
              type="primary"
              block
              className="bg-primary hover:bg-secondary mt-4  w-full text-light"
              loading={isloading}
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
