import query from "@/lib/dbConnection";

export default function addMedia(params) {
  const { file_name, file_path, file_type, file_size } = params;

  const sqlQuery = `
        INSERT INTO media 
            (file_name,file_path,file_type, file_size)
        VALUE 
            (?, ?, ?, ? );
    `;

  const result = query({
    query: sqlQuery,
    values: [file_name, file_path, file_type, file_size],
  });

  return result;
}
