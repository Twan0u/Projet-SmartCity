const pool = require("../modele/database");
const jwt = require('jsonwebtoken');
require('dotenv').config();

const TutorModel = require("../modele/tutor");

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