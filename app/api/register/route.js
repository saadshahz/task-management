import checkUserExist from "@/queries/checkUserExist";
import registerUser from "@/queries/payload/registerUser";
import { v4 as uuidv4 } from "uuid";

export const POST = async (request) => {
  try {
    let response;

    const userData = await request.json();
    const userId = uuidv4();

    const userExit = await checkUserExist(userData.username);
  // `${userExit[0].user} User Exist Already`
    if (userExit[0].user) {
      response = { success: 0, message: `${userExit[0].user} Exist Already`, errors: [] };
      return new Response(JSON.stringify(response), { status: 409 });
    }
    
    const result = await registerUser(userId, userData);

    if (result) {
      response = { success: 1, message: "Successfully created employee.", errors: [], transId: userId};
      return new Response(JSON.stringify(response), { status: 200 });
    }

    response = { success: 0, message: `Something went wrong ${result}.`, errors: [], transId: userId };
    return new Response(JSON.stringify(response), { status: 400 });
  } catch (error) {
    return new Response(" Reason : " + error, { status: 500 });
  }
};
