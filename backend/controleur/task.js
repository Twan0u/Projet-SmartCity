const TaskModele = require("../modele/task");

module.exports.getTask = (req, res) => {
    const idTexte = req.params.id; //attention ! Il s'agit de texte !
    const id = parseInt(idTexte);
    if(isNaN(id)){
        res.sendStatus(400);
    } else {
        try{
            const task = TaskModele.getTask(id);
            res.json(task);
        } catch (error){
            res.sendStatus(404);
        }
    }
}

module.exports.postTask = (req, res) => {
    const body = req.body;
    const {id, title, type, description, date, idSchoolSubject, idClass} = body;
    const response = TaskModele.postTask(id, title, type, description, date, idSchoolSubject, idClass);
    if(response){
        res.sendStatus(201);
    } else {
        res.sendStatus(500);
    }
}

module.exports.updateTask = (req, res) => {
    const {id, title, type, description, date, idSchoolSubject, idClass} = req.body;
    const response = TaskModele.updateTask(id, title, type, description, date, idSchoolSubject, idClass);
    if(response){
        res.sendStatus(204);
    } else {
        res.sendStatus(404);
    }
}

module.exports.deleteTask = (req, res) => {
    const {id} = req.body;
    const response = TaskModele.deleteTask(id);
    if(response){
        res.sendStatus(204);
    } else {
        res.sendStatus(500);
    }
}