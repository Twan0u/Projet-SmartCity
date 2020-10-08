let express = require('express');
let app = express();
let bodyParser = require('body-parser');
var path = require('path');
//var mysql = require('mysql');
var session = require('express-session');

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
    res.sendFile(path.join(__dirname + '/dashboard2.html'));
  } else {
    res.redirect('/');
  }

})

app.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname + '/login.html'));
})

app.post('/',(req,res)=>{
  let userMail = req.body.userMail;
	let password = req.body.userPassword;
  console.log(userMail +" - "+ password)
	if (userMail && password) {
		//connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
			//if (results.length > 0) {
      console.log(userMail +" - "+ password)
      if(userMail == 'ant.lamb.al@gmail.com'){
				req.session.loggedin = true;
				req.session.userMail = userMail;
				res.redirect('/dashboard');
			} /*else {
				response.send('Incorrect Username and/or Password!');
			}
			response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();*/
	}else{
    res.redirect('/');
  }
})

app.get('*',(req,res)=>{
  res.send("404");
})

app.listen(80);
