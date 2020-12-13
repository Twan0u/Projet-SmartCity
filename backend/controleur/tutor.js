const pool = require("../modele/database");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();

const TutorModel = require("../modele/tutor");
const PupilModel = require("../modele/pupil");
const ResponsibleModel = require("../modele/responsible")

module.exports.getPupils = async (req, res) => {
    const client = await pool.connect();
    try{
        let pupils = await TutorModel.getPupils(req.user.id,client);
        for(let i=0;i<pupils.length;i++){
            pupils[i].token = jwt.sign(pupils[i], process.env.ACCESS_TOKEN_SECRET);
        }

        if(pupils !== undefined){
            res.status(200).json(pupils);
        } else {
            res.sendStatus(500);
        }
    } catch (error){
        res.sendStatus(500);
    } finally {
        client.release();
    }
}
module.exports.addPupil = async (req, res) => {
    const client = await pool.connect();

    const pupil_username = req.body.username;
    const pupil_password = req.body.password;

    const idTutor = req.user.id;

    if (!pupil_username || !pupil_password){return res.sendStatus(400);}//bad request : nothing in body

    let pupil = undefined;

    try{

        //todo gérer les ajout multiples du meme enfant par la meme personne

        pupil = await PupilModel.loginPupil(pupil_username, client);

        if (pupil === undefined){ return res.sendStatus(404);} // pupil not found
        else{ //if pupil has been found
            if(await bcrypt.compare(pupil_password,pupil.password)){//if passwords match

                if(await ResponsibleModel.addResponsible(idTutor,pupil.id,client)){
                    return res.sendStatus(200);
                }
            }else{
                return res.sendStatus(401);//if pupil password is wrong
            }
        }
    } catch (error){
        res.sendStatus(500);
    } finally {
        client.release();
    }
}
