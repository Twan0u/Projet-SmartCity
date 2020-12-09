const express = require('express');
const app = express();
const Router = require('./route');
require('dotenv').config(); //used to get the app port in .env file

//swagger
const swaggerUi = require('swagger-ui-express');
const swaggerDoc = require('./swagger/swagger_jsdoc').swaggerDoc;

//variables
let port = process.env.API_PORT || 4000;

//Middlewares
app.use(express.json());

//Routes
app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerDoc));
app.use(Router);

app.listen(port, () => {
    console.log(`The app is listening on port : ${port}`);
});