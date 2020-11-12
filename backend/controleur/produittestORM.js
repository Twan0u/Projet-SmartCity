const ProduitORM = require('../ORM/model/Produit');

module.exports.getProduit = async (req, res) => {
    const idTexte = req.params.id; //attention ! Il s'agit de texte !
    const id = parseInt(idTexte);
    try{
        if(isNaN(id)){
            res.sendStatus(400);
        } else {
            const produit = await ProduitORM.findOne({where: {id: id}});
            if(produit !== null){
                res.json(produit);
            } else {
                res.sendStatus(404);
            }
        }
    } catch (error){
        res.sendStatus(500);
    }
}
/*
•	https://sequelize.org/master/manual/model-querying-basics.html#simple-insert-queries
•	https://sequelize.org/master/manual/model-querying-basics.html#simple-update-queries
•	https://sequelize.org/master/manual/model-querying-basics.html#simple-delete-queries
•	https://sequelize.org/master/manual/model-querying-basics.html#simple-select-queries

 */