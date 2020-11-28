const ClassModele = require ("../modele/class");

module.exports.getClasse = (req, res) => {

    const idTexte = req.params.id; //attention ! Il s'agit de texte !
    const id = parseInt(idTexte);

    if(isNaN(id)){
        res.sendStatus(400);
    } else {
        try{
            const classe = ClassModele.getClasse(id);
            res.json(classe);
        } catch (error){
            res.sendStatus(404);
        }
    }
}
