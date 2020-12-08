const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();

let pool = require ("../modele/database");
let teacherDB = require ("../modele/teacher");
let studentDB = require ("../modele/pupil")

module.exports.getToken = async (req, res) => {
    const client = await pool.connect();

    const username = req.body.username;
    const password = req.body.password;

    let user = undefined;

    if (!username || !password){return res.sendStatus(400);}//bad request : nothing in body

    try{
        user = await studentDB.loginPupil(username, client);
        if(user !== undefined){
            user.role = 'pupil';
        }else{
            user = await teacherDB.teacherLogin(username, client);
            if(user !== undefined){
                user.role = 'teacher';
            }
        }
    } catch (error){
        return res.sendStatus(500);
    } finally {
        client.release();
    }

   if(user === undefined) {//if no user with that login
       return res.sendStatus(404);
   }else{
       if(await bcrypt.compare(password,user.password)){
           //const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET,{ expiresIn: '1800s' });//todo
           const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
           res.json(accessToken);
           delete user.password;
       }else{
           return res.sendStatus(401);//if code is wrong
       }
   }
};