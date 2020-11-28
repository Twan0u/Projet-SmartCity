const TeacherModel = require("../modele/teacher");
const pool = require("../modele/database");
/*
module.exports.getTeacher = (req, res) => {
    const idText = req.params.id; //attention ! Il s'agit de texte !
    const id = parseInt(idText);
    if(isNaN(id)){
        res.sendStatus(400);
    } else {
        try{
            const teacher = TeacherModel.getTeacher(id);
            res.json(teacher);
        } catch (error){
            res.sendStatus(404);
        }
    }
}*/

module.exports.getTeacher = async (req, res) => {
    const client = await pool.connect();
    const idTexte = req.params.id; //attention ! Il s'agit de texte !
    const id = parseInt(idTexte);
    try{
        if(isNaN(id)){
            res.sendStatus(400);
        } else {
            const {rows: teachers} = await TeacherModel.getTeacher(id, client);
            const teacher = teachers[0];
            if(teacher !== undefined){
                res.json(teacher);
            } else {
                res.sendStatus(404);
            }
        }
    } catch (error){
        res.sendStatus(500);
    } finally {
        client.release();
    }
}