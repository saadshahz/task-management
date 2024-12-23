import query from '@/lib/dbConnection'

export default function getTasks(userId) {
  
    const sqlQuery = `
        SELECT 
            taskID , name, priority , status ,image , description, created_on 
        FROM 
            tasks
        WHERE 
            userId = ?
        `;

    const result = query({
        query : sqlQuery,
        values : [userId],
    })

    return result;

}
