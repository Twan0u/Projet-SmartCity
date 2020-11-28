const PupilModele = require("../modele/pupil");

module.exports.getPupil = (req, res) => {

    const idTexte = req.params.id; //attention ! Il s'agit de texte !
    const id = parseInt(idTexte);

    if(isNaN(id)){
        res.sendStatus(400);
    } else {
        try{
            const pupil = PupilModele.getPupil(id);
            res.json(pupil);
        } catch (error){
            res.sendStatus(404);
        }
    }
}