import React from 'react'

export async function addNewMedia(formData, token) {
    try {
  
      const response = await fetch(`http://localhost:3000/api/media/new`, {
        method: 'POST',
        headers: {
          "authorization": `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      })
      const result = await response.json();
  
      return result;
    } catch (error) {
      return error;
    }
  }