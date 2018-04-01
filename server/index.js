const express = require('express');
const registerMiddleWares = require('./middleWares');
const config = require('./config');
const routeTools = require('./tools/routeTools');
const createRoute = routeTools.createRoute;

const contactRoutes = require('./controllers/routes');

const app = express();

registerMiddleWares(app);
routeTools.registerRoutes(app, createRoute('contacts'), contactRoutes);

app.listen(config.port, config.hostname);