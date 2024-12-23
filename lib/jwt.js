const jwt = require('jsonwebtoken');

const DEFAULT_SIGN_OPTION = {
  expiresIn: "24h",
};

// Export functions using module.exports
module.exports.signJwtAccessToken = function signJwtAccessToken(payload, options = DEFAULT_SIGN_OPTION) {
  const secret_key = process.env.NEXTAUTH_SECRET;
  const token = jwt.sign(payload, secret_key, options);
  return token;
};

module.exports.verifyJwt = function verifyJwt(token) {
  try {
    const secret_key = process.env.NEXTAUTH_SECRET;
    const decoded = jwt.verify(token.replace(/^Bearer\s/, ''), secret_key);
    return decoded;
  } catch (error) {
    console.log(error);
    return null;
  }
};
