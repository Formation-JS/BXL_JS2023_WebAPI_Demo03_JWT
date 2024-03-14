'use strict';
import 'dotenv/config';

// Imports
import express from 'express';
import morgan from 'morgan';

// Variable d'en
const {PORT, NODE_ENV} = process.env;

// Web API
//* Initialisation
const app = express();

//* Middleware
app.use(morgan('tiny'));
app.use(express.json());

//* Routing

//* Start
app.listen(PORT, () => {
    console.log(`Web API is running on ${PORT} (${NODE_ENV})`);
});