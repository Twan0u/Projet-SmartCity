const pool = require("../modele/database");

module.exports.getProduit = async (req, res) => {
    const client = await pool.connect();

    const username = req.body.username;
    const password = req.body.username;

    try{
        const {rows: dbPasswords} = await ProduitModele.getLogin(username, client);
        const  dbPassword = dbPasswords[0];
        if(dbPassword !== undefined){
            console.log(dbPassword + " <-db / type ->" + password);
            if (dbPassword === password){
                res.sendStatus(200);
            }else{
                res.sendStatus(401); //Invalid credentials
            }
        } else { //usernot found
            res.sendStatus(404); //user not found
        }
    } catch (error){
        res.sendStatus(500); //an error has occured
    } finally {
        client.release();
    }
}
