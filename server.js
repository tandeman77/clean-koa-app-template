if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-body');
app.use(bodyParser());

//routes
const indexRoutes = require('./routes/index.js');
const authRoutes = require('./routes/auth.js');
app.use(indexRoutes.routes());
app.use(indexRoutes.allowedMethods());
app.use(authRoutes.routes());
app.use(authRoutes.allowedMethods());


//initialise the app.
app.listen(process.env.PORT, () => {
  console.log('app is working on port ' + process.env.PORT);
});