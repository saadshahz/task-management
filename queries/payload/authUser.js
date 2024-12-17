import query from "@/lib/dbConnection";

export default async function authUser(email, password) {

  const sqlQuery = `
  SELECT 
    first_name, last_name, username, email, phone 
  FROM users WHERE 
    email = ? AND password = md5(?)
  ;`;

  const result = await query({
    query: sqlQuery,
    values: [email, password],
  });

  return result;
}
