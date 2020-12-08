const pool = require("../modele/database");
const ClassModel = require ("../modele/class");

module.exports.getClass = async (req, res) => {
    const client = await pool.connect();
    try{
        const role = req.user.role;
        let classes = undefined;

        if (role === 'teacher'){
            classes = await ClassModel.getTeacherClass(req.user.id, client);
        }
        if(role === 'pupil'){
            classes = await ClassModel.getPupilClass(req.user.id, client);
        }

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
module.exports.getClassTeacher = async (req, res) => {
    const client = await pool.connect();
    try{
        let teacher = await ClassModel.getTeacher(req.user.id, client);

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
module.exports.getPupils = async (req, res) => {
    const client = await pool.connect();
    try{
        let pupils = await ClassModel.getPupils(req.user.id, client);
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

