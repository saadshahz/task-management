import { verifyJwt } from "@/lib/jwt";

export function userAuthCheck(request) {
  const accessToken = request.headers.get("authorization");
  if (!accessToken || !verifyJwt(accessToken)) {
    return false;
  }

  return true;
}

