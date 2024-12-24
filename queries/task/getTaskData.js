import query from '@/lib/dbConnection'

export default function getTaskData(taskID) {

    const sqlQuery = `
        SELECT 
            taskID , name, priority , status ,image ,description ,start_date ,end_date,created_on 
        FROM 
            tasks 
        WHERE  taskID = ?
        ;`

    const result = query({
        query: sqlQuery,
        values: [taskID]
    })

    return result;

}
