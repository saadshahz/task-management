"use client";
import { BellOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";

export default function TopNav() {
  const { Search } = Input;
  const onSearch = (value, _e, info) => console.log(info?.source, value);

  return (
    <div className="p-4 flex justify-between items-center bg-[#f8f8f8] shadow">
      <div className="w-[50%]">
        <Search
          placeholder="input search text"
          onSearch={onSearch}
          allowClear
          // style={{}}c
          className=" topNav-serachBar"
        />
      </div>
      <div>
        <Space direction="horizontal">
          <div>
            <p className=" text-formInput ">Tuesday</p>
            <p className="text-primary text-formInput">20/06/2023</p>
          </div>
          <BellOutlined className={"bg-primary text-light p-2 rounded"} />
        </Space>
      </div>
    </div>
  );
}
