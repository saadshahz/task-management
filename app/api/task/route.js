import getTasks from "@/queries/task/getTasks";
import { userAuthCheck } from "@/utils/userAuthCheck";

export const POST = async (request) => {
    try {
        const  userID  = await request.json();
       
        if (!userAuthCheck(request)) return new Response(JSON.stringify({ error: "You are unauthorized user!", }), { status: 401 });

        const result = await getTasks(userID);

        return new Response(JSON.stringify(result), { status: 200 });

    } catch (error) {
        return new Response(`Failed to fetch products: ${error}`, { status: 500 });
    }
}