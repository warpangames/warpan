const express = require('express');
const path  = require('path');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const App = express();
const router = require('./Routes/Project');

require('dotenv').config();

const DBURL = process.env.dbURL;
App.use(express.static(path.join(__dirname, "public")));
App.use('/',router.ProjectRouter);
App.use(express.json());
App.use(bodyparser.urlencoded({extended: 'true'}));

const PORT = process.env.port || 5000;
mongoose.connect(DBURL).then(() => {
    App.listen(PORT, () => {
        console.log("listening for requests");
    })
})




