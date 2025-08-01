import query from "@/lib/dbConnection";

export default function getMedia(mediaID) {
  const sqlQuery = `
            SELECT 
              file_name, file_path, file_type, file_size
            FROM
              media;
            WHERE 
              id = ?
        `;

  const result = query({
    query: sqlQuery,
    values: [mediaID],
  });

  return result;
}
