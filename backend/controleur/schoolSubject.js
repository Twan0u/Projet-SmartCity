const SchoolSubjectModel = require("../modele/schoolSubject");

module.exports.getSchoolSubject = (req, res) => {
    const idTexte = req.params.id; //attention ! Il s'agit de texte !
    const id = parseInt(idTexte);
    if(isNaN(id)){
        res.sendStatus(400);
    } else {
        try{
            const response = SchoolSubjectModel.getSchoolSubject(id);
            res.json(response);
        } catch (error){
            res.sendStatus(404);
        }
    }
}