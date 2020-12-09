const pool = require("../modele/database");
const TaskModel = require("../modele/task");

module.exports.getTasks = async (req, res) => {
    const client = await pool.connect();
    const idClass = req.user.idclass
    try{
        let tasks = await TaskModel.getTasksByClassId(idClass, client);
        if(tasks !== undefined){
            res.status(200).json(tasks);
        } else {
            res.sendStatus(404);
        }

    } catch (error){
        res.sendStatus(500);
    } finally {
        client.release();
    }
}
module.exports.getTodayTasks = async (req, res) => {
    const client = await pool.connect();
    const idClass = req.user.idclass
    try{
        let tasks = await TaskModel.getTodayTasksByClassId(idClass, client);
        if(tasks !== undefined){
            res.status(200).json(tasks);
        } else {
            res.sendStatus(404);
        }

    } catch (error){
        res.sendStatus(500);
    } finally {
        client.release();
    }
}
module.exports.getWeekTasks = async (req, res) => {
    const client = await pool.connect();
    const idClass = req.user.idclass
    try{
        let tasks = await TaskModel.getWeekTasksByClassId(idClass, client);
        if(tasks !== undefined){
            res.status(200).json(tasks);
        } else {
            res.sendStatus(404);
        }

    } catch (error){
        res.sendStatus(500);
    } finally {
        client.release();
    }
}

module.exports.postTask = (req, res) => {
    const body = req.body;
    const {id, title, type, description, date, idSchoolSubject, idClass} = body;
    const response = TaskModel.postTask(id, title, type, description, date, idSchoolSubject, idClass);
    if(response){
        res.sendStatus(201);
    } else {
        res.sendStatus(500);
    }
}

module.exports.updateTask = (req, res) => {
    const {id, title, type, description, date, idSchoolSubject, idClass} = req.body;
    const response = TaskModel.updateTask(id, title, type, description, date, idSchoolSubject, idClass);
    if(response){
        res.sendStatus(204);
    } else {
        res.sendStatus(404);
    }
}

module.exports.deleteTask = (req, res) => {
    const {id} = req.body;
    const response = TaskModel.deleteTask(id);
    if(response){
        res.sendStatus(204);
    } else {
        res.sendStatus(500);
    }
}