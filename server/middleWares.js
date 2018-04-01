const bodyParser = require('body-parser');
const cors = require('cors');

const middleWares = [
    bodyParser.json(),
    bodyParser.urlencoded({ extended: true }),
    cors(),
];


const registerMiddleWares = app => middleWares.forEach(middleWare => app.use(middleWare));

module.exports = registerMiddleWares;