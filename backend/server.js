/*
 IMPORTS
 */
const express = require('express');

const Router = require('./route');
const Identification = require('./middleware/identification');

const app = express();
const port = 3000;

/*
 MIDDLEWARES
 */
app.use(express.json());
app.use(Identification.identification);

app.use(Router);

app.listen(port, () => {
    console.log(`The app is listening on port : ${port}`);
});