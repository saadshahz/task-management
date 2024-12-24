"use client"
import { getTaskDetail } from '@/app/actions/getTaskDetail';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import taskImg from "../../styles/images/demotask.jpg";
import { LoadingOutlined } from '@ant-design/icons';

export default function TaskDetail() {

  const params = useParams()
  const { data, status } = useSession();
  const [taskDetail, setTaskDetail] = useState();
  const [userData, setUserData] = useState(data.user);


  useEffect(() => {
    getData();
  }, [])


  const getData = async () => {
    const reponse = await getTaskDetail(userData.accessToken, params.id);
    setTaskDetail(reponse)
  }
  if (taskDetail) {
    switch (taskDetail.status) {
      case "notStarted":
        taskDetail.status = "Not Started";
        break;

      case "inProgress":
        taskDetail.status = "In Progress";
        break;

      case "completed":
        taskDetail.status = "Completed";
        break;
    }
    switch (taskDetail?.priority) {
      case "high":
        taskDetail.priority = "High";
        break;

      case "moderate":
        taskDetail.priority = "Moderate";
        break;

      case "low":
        taskDetail.priority = "Low";
        break;
    }
  }


  return (
    <>
      {taskDetail ? <div>
        <div className='flex justify-between  pb-4'>
          <div>
            <span className='text-formHeading font-bold block pb-4' >{taskDetail.name}</span>
            <span className='text-staffDetail font-bold block' >Priority : <span className={`ml-2 font-semibold ${taskDetail.priority == "Low"
              ? "text-green-700"
              : taskDetail.priority == "Moderate"
                ? "text-blue-600"
                : "text-red-600"
              }`}>{taskDetail.priority}</span></span>
            <span className='text-staffDetail font-bold block' >Status : <span className={`ml-2 font-semibold ${taskDetail.status == "Completed"
              ? "text-green-700"
              : taskDetail.status == "In Progress"
                ? "text-blue-600"
                : "text-red-600"
              }`}>{taskDetail.status}</span> </span>
          </div>
          <div>
            <Image
              src={taskImg}
              className="w-full h-full rounded"
              width={300}
              height={100}
              alt="Task Image"
            />
          </div>
        </div>
        <div>
          <p className='text-staffDetail font-bold block'  >Description :</p>
          <p>{taskDetail.description}</p>
        </div>
      </div> : <LoadingOutlined style={{ fontSize: "3rem", fill: "var(--color-primary)" }} />}

    </>

  )
}
