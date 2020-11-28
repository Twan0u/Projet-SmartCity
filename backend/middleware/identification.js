let pool = require ("../modele/database");
let teacherDB = require ("../modele/teacher");
let studentDB = require ("../modele/pupil")

module.exports.identification = async (req, res, next ) => {
    // todo est un prof ? req.isTeacher = true
    // todo est un élève ? req.
    // todo res.send code Bad Credentials
    //todo retourner les autorisations
    next();
};