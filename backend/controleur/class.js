const pool = require("../modele/database");
const ClassModel = require ("../modele/class");

module.exports.getClass = async (req, res) => {
    const client = await pool.connect();
    const idClass = req.user.idclass
    try{
        let classes = await ClassModel.getClass(idClass, client);
        if(classes !== undefined){
            res.status(200).json(classes);
        } else {
            res.sendStatus(404);
        }

    } catch (error){
        res.sendStatus(500);
    } finally {
        client.release();
    }
}
module.exports.getPupilsInClass = async (req, res) => {
    const client = await pool.connect();
    const idClass = req.user.idclass
    try{
        console.log(req.user)
        let pupils = await ClassModel.getPupilsInClass(idClass, client);
        console.log(pupils)
        if(pupils !== undefined){
            res.status(200).json(pupils);
        } else {
            res.sendStatus(404);
        }

    } catch (error){
        res.sendStatus(500);
    } finally {
        client.release();
    }
}


module.exports.getClassTeacher = async (req, res) => {
    const client = await pool.connect();
    const idClass = req.user.idclass
    try{
        let teacher = await ClassModel.getClassTeacher(idClass, client);
        if(teacher !== undefined){
            res.status(200).json(teacher);
        } else {
            res.sendStatus(404);
        }

    } catch (error){
        res.sendStatus(500);
    } finally {
        client.release();
    }
}