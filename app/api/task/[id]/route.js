import getTaskData from "@/queries/task/getTaskData";
import { userAuthCheck } from "@/utils/userAuthCheck";

export const GET = async (request, { params }) => {
    try {
        if (!userAuthCheck(request)) return new Response(JSON.stringify({ error: "You are unauthorized user!", }), { status: 401 });

        const result = await getTaskData(params.id);

        if (!result[0]) return new Response("task Not not found", { status: 404 });

        return new Response(JSON.stringify(result[0]), { status: 200 });

    } catch (error) {
        return new Response(`Failed to fetch customer: ${error}`, { status: 500 });
    }
}