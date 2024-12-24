import query from '@/lib/dbConnection';

export default function addTask(taskID, params) {

    const { userId, name, priority, status, image, description, start_date, end_date } = params;

    const sqlQuery = `
        INSERT INTO tasks
            (taskID , userId, name, priority, status, image, description, start_date, end_date )
		value 
	        ( ?, ?, ?, ?, ?, ?, ?, ?, ? );
        `;

    const result = query({
        query: sqlQuery,
        values: [taskID, userId, name, priority, status, image, description, start_date, end_date]
    });

    return result;

}
