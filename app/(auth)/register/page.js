"use client";
import { useRouter } from "next/navigation";
import { Button, Form, Input } from "antd";

export default function Register() {
  const router = useRouter();

  const [form] = Form.useForm();

  const onFinish = (formValues) => {
    console.log("formValues : ", formValues);

    // localStorage.setItem('registerFormValues', JSON.stringify(formValues));

    // router.push('/salon/onboarding');
  };

  return (
    <>
      <div className="w-1/2 flex justify-center items-center">
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
            <Form.Item
              required={false}
              label="Full Name"
              name="full_name"
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
            <Form.Item
              required={false}
              label="Email"
              name="email"
              colon={false}
              className="mt-6 mb-4"
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
            <Form.Item
              required={false}
              id="password"
              name="password"
              label="Password"
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
                className="login-form-button text-light  text-formLabel bg-primary "
                htmlType="submit"
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
