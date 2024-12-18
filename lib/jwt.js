import jwt from "jsonwebtoken";

const DEFAULT_SIGN_OPTION = {
  expiresIn: "24h",
};

export function signJwtAccessToken(payload, options = DEFAULT_SIGN_OPTION) {
  const secret_key = process.env.NEXTAUTH_SECRET;
  const token = jwt.sign(payload, secret_key, options);
  return token;
}