const compose = require("koa-compose");
const authRoutes = require("./auths").routes();
const homeRoutes = require("./home").routes();
const privateRoutes = require("./privateRoutes").routes();
const weekRoutes = require("./weeks.js").routes();
const userRoutes = require("./users.js").routes();

module.exports = compose([
  authRoutes,
  homeRoutes,
  privateRoutes,
  weekRoutes,
  userRoutes
]);
