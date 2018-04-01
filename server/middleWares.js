const bodyParser = require('body-parser');
const cors = require('cors');
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true
};
const middleWares = [
    bodyParser.json(),
    bodyParser.urlencoded({ extended: true }),
    cors(corsOptions),
];


const registerMiddleWares = app => {
    app.options('*', cors(corsOptions));
    middleWares.forEach(middleWare => app.use(middleWare))
};

module.exports = registerMiddleWares;