const express = require('express');
const path  = require('path');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors'); // Import the 'cors' middleware

const App = express();
const router = require('./Routes/Project');

require('dotenv').config();

const DBURL = "mongodb+srv://WarPanGames:zJyHZPvwMFxdf4qS@cluster0.dziwy2k.mongodb.net/WarPanGames?retryWrites=true&w=majority";
// process.env.dbURL;
App.use(express.static(path.join(__dirname, "public")));
App.use(express.static('/var/www/unity')); // Replace with the actual path to your external folder
//F:/Warpan/Website/WebApp/WarpanGames/Unity
App.use('/',router.ProjectRouter);
App.use(express.json());
App.use(bodyparser.urlencoded({extended: 'true'}));

App.use(cors());


const PORT = process.env.port || 5000;
mongoose.connect(DBURL).then(() => {
    App.listen(PORT, () => {
        console.log("listening for requests");
    })
})




