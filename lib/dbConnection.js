import mysql from "mysql2/promise";

export default async function query({ query, values = [] }) {
  const dbconnection = await mysql.createConnection({
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    dateStrings: true,
    multipleStatements: true,
  });

  try {
    const [result] = await dbconnection.query(query, values);
    dbconnection.end();

    return result;
  } catch (error) {
    throw new Error(error);
  }
}
