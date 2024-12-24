import React from 'react'

export async function getTaskDetail(token, taskID) {
    try {

        const response = await fetch(`http://localhost:3000/api/task/${taskID}`, {
            method: 'GET',
            headers: {
                "authorization": `Bearer ${token}`
            },
        })
        const result = await response.json();

        return result;
    } catch (error) {
        return error;
    }
}
