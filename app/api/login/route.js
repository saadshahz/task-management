import { signJwtAccessToken } from "@/lib/jwt";
import authUser from "@/queries/payload/authUser";

export const POST  = async (request) => {
  try {
    let response;

    const { email, password } = await request.json();
    const result = await authUser(email, password);

    if (result.length > 0) {
      const accessToken  = signJwtAccessToken(result[0])

      response = { success: 1, message: "User is logged In", data: { ...result[0], accessToken }};

      return new Response(JSON.stringify(response), { status: 200 });
    } else {
      response = { success: 0, message: "Failded to logged In", data: {result} };
      return new Response(JSON.stringify(response), { status: 404 });
    }
  } catch (error) {
    return new Response(" Reason : " + error, { status: 500 });
  }
}
