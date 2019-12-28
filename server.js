const env = require('dotenv').config();
const Koa = require('koa');
const body = require('koa-body');
const Router = require('koa-router');
const router = new Router();

const app = new Koa();
app.use(body());

//routes
router.get('/', (ctx) => {
  ctx.body = 'Hello World';
})

app.use(router.routes());
app.use(router.allowedMethods());


//initialise the app.
app.listen(process.env.PORT, () => {
  console.log('app is working on port ' + process.env.PORT);
});