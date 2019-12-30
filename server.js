if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-body');
app.use(bodyParser());

//routes
//require authntication for private route
// const indexRoutes = require('./routes/home.js');
// const authRoutes = require('./routes/auth.js');
// const privateRoutes = require('./routes/privateRoutes.js');
// app.use(indexRoutes.routes());
// app.use(indexRoutes.allowedMethods());
// app.use(authRoutes.routes());
// app.use(authRoutes.allowedMethods());
// app.use(privateRoutes.routes());
// app.use(privateRoutes.allowedMethods());
const allRoutes = require('./routes/index');
app.use(allRoutes);


//initialise the app.
app.listen(process.env.PORT, () => {
  console.log('app is working on port ' + process.env.PORT);
});
