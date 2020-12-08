/*
 IMPORTS
 */
const express = require('express');

const Router = require('./route');

const app = express();
const port = 4000;

/*
    MIDDLEWARES
 */
app.use(express.json());

/*
    ROUTES
 */
app.use(Router);

/*
    OTHERS
 */
app.listen(port, () => {
    console.log(`The app is listening on port : ${port}`);
});