"use client";
import Icon, {
  AppstoreOutlined,
  SettingOutlined,
  LoginOutlined,
  AlignLeftOutlined,
  LineChartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Flex } from "antd";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Sidebar() {
  const pathname = usePathname();
  const { data, status } = useSession();
  const [userData, setUserData] = useState(data.user);

  const handleLogout = async () => {
    const response = await signOut({ redirect: true, callbackUrl: "/login" });
  };

  const MenuItem = [
    {
      title: "Dashboard",
      path: "/dashboard",
      icon: <AppstoreOutlined />,
      isAllow: true,
    },
    {
      title: "Vital Task",
      path: "/vital-task",
      icon: <LineChartOutlined />,
      isAllow: true,
    },
    {
      title: "My Task",
      path: "/my-task",
      icon: <AlignLeftOutlined />,
      isAllow: true,
    },
    {
      title: "Settings",
      path: "/settings",
      icon: <SettingOutlined />,
      isAllow: true,
    },
  ];

  return (
    <div className="bg-black h-screen flex flex-col justify-between w-full p-4">
      <div>
        <div>
          <h1 className="text-light lg:text-modalTitle  xl:text-formHeading text-center font-bold">
            <span className="text-primary">TASK</span> MANAGEMENT
          </h1>
        </div>
        <div className="py-4 flex flex-col justify-between ">
          <ul>
            {MenuItem &&
              MenuItem.map((item, index) => {
                if (item.isAllow) {
                  return (
                    <li key={index} className="pb-4 px-2">
                      <Link
                        href={item.path}
                        className={
                          item.path == pathname
                            ? "active text-staffDetail font-semibold text-primary bg-white p-2 rounded w-full block hover:text-black"
                            : "text-staffDetail font-semibold text-white  w-full p-2 block hover:text-primary "
                        }
                      >
                        <span className="pr-2">{item.icon}</span>
                        {item.title}
                      </Link>
                    </li>
                  );
                }
              })}
            <li className="pb-4 px-2">
              <button
                onClick={handleLogout}
                className={
                  "text-staffDetail font-semibold text-white  w-full p-2 block hover:text-primary text-left"
                }
              >
                <span className="pr-2">
                  <LoginOutlined className="rotate-180" />
                </span>
                {"Logout"}
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-white border border-primary rounded py-2 px-4 flex justify-between items-center">
        <div className="">
          <span className="block pb-1 font-bold">{userData.username}</span>
          <span>{userData.email}</span>
        </div>
        <div>
          {/* <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" /> */}
          <Avatar
            shape="rounded"
            className="bg-secondary"
            size={40}
            icon={<UserOutlined />}
          />
        </div>
      </div>
    </div>
  );
}
