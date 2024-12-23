
export async function getTask(userID, token) {
  try {

    const response = await fetch(`http://localhost:3000/api/task`, {
      method: 'POST',
      headers: {
        "authorization": `Bearer ${token}`
      },
      body: JSON.stringify(userID)
    })
    const result = await response.json();

    return result;
  } catch (error) {
    return error;
  }
}
