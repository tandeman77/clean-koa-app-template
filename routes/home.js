const Router = require('@koa/router');
const router = new Router();

//home page
router.get('/', (ctx) => {
  ctx.body = 'Hello World';
})

module.exports = router