import query from "@/lib/dbConnection";

export default async function registerUser(user_id, params) {
  const { first_name, last_name, username, email, phone, password } = params;

  const sqlQuery = `
    INSERT INTO users
      ( user_id, first_name, last_name, username, email, phone, password ) 
    value 
      ( ?, ?, ?, ?, ?, ?, md5(?))
    ;`;

  const result  = query({
    query: sqlQuery,
    values : [user_id, first_name, last_name, username, email, phone, password]
  })

  return result;
}
