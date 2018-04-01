const config = require('../config');


exports.createRoute = route => `/api/v${config.version}/${route}`;

exports.getId = req => parseInt(req.params.id, 10);

exports.registerRoutes = (app, prefix, routes = []) => routes.forEach(route => app.use(prefix, route));