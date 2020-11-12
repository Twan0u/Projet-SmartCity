let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let path = require('path');
let session = require('express-session');

let mesFcts = require('./tools.js');

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

  console.log(userMail +" - "+ password)
	if (userMail && password) {

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
    maDb.getProduit(req,res);
    res.sendFile(path.join(__dirname + '/404.html'));
})

app.listen(80);

/*
const Router = require('./route');
const express = require('express');
const app = express();
const port = 80;

app.use(express.json());
app.use(Router);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
*/

