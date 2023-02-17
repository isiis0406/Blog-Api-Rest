const express = require('express');
require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');
const router = require('./routes/blogRouter.js');

//initialize the application
const app = express();

//Add custom Middlewares
app.use(cors());
app.use(express.json());

//Connect to mongodb Database
(async () => {
    try {
        mongoose.set('strictQuery', true);
        mongoose.connect(process.env.DATABASE_URL, () => {
            console.log('Connected to database');
        })
    } catch (error) {
        console.log(error);
    }
})();

//Initialize Router
app.use(router);

//Initialize the server app listening
app.listen(process.env.PORT, () => {
    console.log(`Server listening on port : ${process.env.PORT}`);
})

