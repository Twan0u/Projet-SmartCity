const pool = require("../modele/database");
const PupilModel = require("../modele/pupil");

module.exports.getPupil = async (req, res) => {
    const client = await pool.connect();
    const id = req.params.id;
    try{
        const pupil = await PupilModel.getPupil(id, client);
        if(pupil !== undefined){
            res.status(200).json(pupil);
        } else {
            res.sendStatus(404);
        }
    } catch (error){
        res.sendStatus(500);
    } finally {
        client.release();
    }
}