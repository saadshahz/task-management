"use client"
import { Flex } from 'antd';
import React, { useEffect, useState } from 'react'
import TaskCard from '../taskCard';
import { LoadingOutlined } from '@ant-design/icons';
import { useSession } from 'next-auth/react';
import { getTask } from '@/app/actions/getTask';

export default function TaskListing() {
    const [tasks, setTasks] = useState()
    const { data, status } = useSession();
    const [userData, setUserData] = useState(data.user);


    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        const TaskData = await getTask(userData.user_id, userData.accessToken);
        console.log("TaskData : ", TaskData)
        setTasks(TaskData);
    }
    return (
        <Flex
            wrap
            gap="small"
            className="tasklisting overflow-y-scroll .+..h-[450px] py-2"
        >
            {tasks != undefined ? (tasks.length > 0 ? tasks.map((item, index) => {
                return (
                    <div
                        className="xl:[48%] lg:w-[100%%] md:[100%] "
                        key={index}
                    >
                        <TaskCard tasks={item} />
                    </div>
                );
            }) : <p className="text-center font-semibold" >No Task Register</p>) :

                <LoadingOutlined style={{ fontSize: "3rem", fill: "var(--color-primary)" }} />
            }
        </Flex>
    )
}
