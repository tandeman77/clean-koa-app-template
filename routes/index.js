const compose = require('koa-compose');
const authRoutes = require('./auth').routes();
const homeRoutes = require('./home').routes();
const privateRoutes = require('./privateRoutes').routes();

module.exports = compose([authRoutes, homeRoutes, privateRoutes]);
