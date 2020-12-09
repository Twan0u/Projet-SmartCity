//permets de simuler une base de données
const tasks = [
    {id: 1, title:"prendre affaires de piscine", type:"test", description: "piscine", date:"22-11-2020", idSchoolSubject:1, idClass:1},
    {id: 2,  title:"task2", type:"test", description: "piscine2", date:"23-11-2020", idSchoolSubject:1, idClass:1},
    {id: 3,  title:"t3", type:"test", description: "piscin3", date:"24-11-2020", idSchoolSubject:1, idClass:1}
]

/**
 * @swagger
 *  components:
 *   schemas:
 *      Task:
 *          type: object
 *          properties:
 *              id:
 *                  type: integer
 *              title:
 *                  type: string
 *                  format: CHAR(255)
 *              type:
 *                  type: string
 *                  format: CHAR(255)
 *              date:
 *                  type: string
 *                  format: 'DDD MMM YYY'
 *              category:
 *                  type: string
 *                  format: CHAR(255)
 *              schoolsubject:
 *                  type: string
 *                  format: CHAR(255)
 *          example:
 *              id: 18
 *              title: 'ramener argent photo de classe'
 *              date: '25 Nov 2020'
 *              category: 'Géométrie'
 *              schoolsubject: 'Mathémathiques'
 */
module.exports.getTasksByClassId = async (idClass, client) => {
    const {rows: tasks} = await client.query(`

        SELECT task.id as id,task.title as title,task.type as type, TO_CHAR(task.date, 'DD Mon YYYY') as date, SchoolSubjectSubCategory.name as category, SchoolSubjectCategory.name as schoolsubject
        FROM task
        LEFT JOIN SchoolSubjectSubCategory
        ON SchoolSubjectSubCategory.id = task.idSchoolSubjectSubCategory
        LEFT JOIN SchoolSubjectCategory
        ON SchoolSubjectCategory.id = SchoolSubjectSubCategory.IdSchoolSubjectCategory
        WHERE IdClass = $1

        `, [idClass]);
    return tasks;
}
module.exports.getTodayTasksByClassId = async (idClass, client) => {
    const {rows: tasks} = await client.query(`

        SELECT task.id as id,task.title as title,task.type as type, TO_CHAR(task.date, 'DD Mon YYYY') as date, SchoolSubjectSubCategory.name as category, SchoolSubjectCategory.name as schoolsubject
        FROM task
        LEFT JOIN SchoolSubjectSubCategory
        ON SchoolSubjectSubCategory.id = task.idSchoolSubjectSubCategory
        LEFT JOIN SchoolSubjectCategory
        ON SchoolSubjectCategory.id = SchoolSubjectSubCategory.IdSchoolSubjectCategory
        WHERE IdClass = $1
            and date = current_date

    `, [idClass]);
    return tasks;
}
module.exports.getWeekTasksByClassId = async (idClass, client) => {
    const {rows: tasks} = await client.query(`

        SELECT task.id as id, task.title as title, task.type as type, TO_CHAR(task.date, 'DD Mon YYYY') as date, SchoolSubjectSubCategory.name as category, SchoolSubjectCategory.name as schoolsubject
        FROM task
        LEFT JOIN SchoolSubjectSubCategory
        ON SchoolSubjectSubCategory.id = task.idSchoolSubjectSubCategory
        LEFT JOIN SchoolSubjectCategory
        ON SchoolSubjectCategory.id = SchoolSubjectSubCategory.IdSchoolSubjectCategory
        WHERE IdClass = $1
            and (date between (current_date + '1 day':: interval) and (current_date + '1 day':: interval + '1 week':: interval))
    
    `, [idClass]);

    return tasks;
}

module.exports.postTask = (id, title, type, description, date, idSchoolSubject, idClass) => {
    produits.push({
        id,
        title,
        type,
        description,
        date,
        idSchoolSubject,
        idClass
    });
    return true;
}

module.exports.updatePrix = (id, title, type, description, date, idSchoolSubject, idClass) => {
    for(let i = 0; i < tasks.length; i++){
        if(tasks[i].id === id){
            tasks[i].title = title;
            tasks[i].type = type;
            tasks[i].description = description;
            tasks[i].date = date;
            tasks[i].idSchoolSubject = idSchoolSubject;
            tasks[i].idClass = idClass;
            return true;
        }
    }
    return false;
}

module.exports.deleteTask = (id) => {
    for (let i = 0; i < tasks.length; i++){
        if(tasks[i].id === id){
            tasks.splice(i, 1);
            return true;
        }
    }
    return true;
}