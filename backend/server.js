const express = require('express');
const app = express();
const Router = require('./route');
require('dotenv').config(); //utilisé pour le port de l'application

//Middlewares
app.use(express.json());

//Routes
app.use(Router);

app.listen(process.env.API_PORT, () => {
    console.log(`The app is listening on port : ${process.env.API_PORT}`);
});