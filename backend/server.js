let express = require('express');
let app = express();
let bodyParser = require('body-parser');
var path = require('path');
//var mysql = require('mysql');
var session = require('express-session');

var mesFcts = require('./tools.js');

/*var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : '',
	database : 'nodelogin'
});*/

//MOTEUR DE TEMPLATES

//MIDDLEWARE
//gère automatiquement le rooting des ressources statiques
app.use('/assets',express.static('public')); // tout est préfixé par /assets

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/dashboard',(req,res)=>{
  if (req.session.loggedin) {
    res.sendFile(path.join(__dirname + '/dashboard.html'));
  } else {
    res.redirect('/');
  }
})

app.get('/',(req,res)=>{
    if (req.session.loggedin) {
        res.redirect('/dashboard');
    } else {
        res.sendFile(path.join(__dirname + '/login.html'));
    }
})

app.get('/logout',(req,res)=>{
    if (req.session.loggedin) {
        req.session.destroy();
        res.redirect('/');
        //todo message successfull log out
    } else {
        res.redirect('/');
        //todo message successfull log out
    }
})


app.post('/auth',(req,res)=>{
  let userMail = req.body.userMail;
	let password = req.body.userPassword;
  console.log(userMail +" - "+ password)
	if (userMail && password) {
		//connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
			//if (results.length > 0) {
      console.log(userMail +" - "+ password)
      if(mesFcts.login(userMail, password)){
				req.session.loggedin = true;
				req.session.userMail = userMail;
				res.redirect('/dashboard');
			} else {
				res.send('Incorrect Username and/or Password!');
				//todo message erreur
			}
	}else{
    res.redirect('/');
    //todo message erreur, pas de nom d'utilisateur ou de mot de passe
  }
})

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname + '/404.html'));
})

app.listen(80);
