
import addTask from "@/queries/task/addTask";
import { v4 as uuidv4 } from "uuid";

export const POST = async (request) => {
    try {
      let response;
  
      const TaskData = await request.json();
      const taskID = uuidv4();
  
      const result = await addTask(taskID, TaskData);
  
      if (result) {
        response = { success: 1, message: "Successfully Created Task.", errors: [], transId: taskID};
        return new Response(JSON.stringify(response), { status: 200 });
      }
  
      response = { success: 0, message: `Something went wrong ${result}.`, errors: [], transId: taskID };
      return new Response(JSON.stringify(response), { status: 400 });
    } catch (error) {
      return new Response(" Reason : " + error, { status: 500 });
    }
  };