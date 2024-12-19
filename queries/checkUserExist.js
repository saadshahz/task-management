import query from "@/lib/dbConnection";

export default function checkUserExist(username) {
  const sqlQuery = `
      SELECT count(username) as user from users 
        WHERE 
      username = ?
    ;`;

  const result = query({
    query: sqlQuery,
    values: [username],
  });

  return result;
}
