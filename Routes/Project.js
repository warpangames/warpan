const express = require('express');
const ProjectRouter = express.Router();
const ProjectController = require('../Controller/Project');


ProjectRouter
.get('/',ProjectController.getHomePage)
.get('/Games',ProjectController.getGamesPage)
.get('/Contact',ProjectController.getContactPage)
.get('/:id',ProjectController.getGameDetailPage)
.get('/Games/filter',ProjectController.getfilterdata)
.get('/sitemap.xml',ProjectController.getsitemap)
.get('/robots.txt',ProjectController.getrobotstxt);

exports.ProjectRouter = ProjectRouter;