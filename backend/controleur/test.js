const TestModele = require("../modele/test");

module.exports.getTest = (req, res) => {
    const idTexte = req.params.id; //attention ! Il s'agit de texte !
    const id = parseInt(idTexte);
    if(isNaN(id)){
        res.sendStatus(400);
    } else {
        try{
            const test = TestModele.getTest(id);
            res.json(test);
        } catch (error){
            res.sendStatus(404);
        }
    }
}

module.exports.postTest = (req, res) => {
    const body = req.body;
    const {id, maxValue,subjectName,idclass} = body;//todo
    const response = TestModele.postTest(id, maxValue,subjectName,idclass);//todo
    if(response){
        res.sendStatus(201);
    } else {
        res.sendStatus(500);
    }
}

module.exports.updateTest = (req, res) => {
    const {id, maxValue,subjectName} = req.body;//todo
    const response = TestModele.updateTest(id, maxValue,subjectName);//todo
    if(response){
        res.sendStatus(204);
    } else {
        res.sendStatus(404);
    }
}

module.exports.deleteTest = (req, res) => {
    const {id} = req.body;
    const response = TestModele.deleteTest(id);
    if(response){
        res.sendStatus(204);
    } else {
        res.sendStatus(500);
    }
}
