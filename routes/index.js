const Router = require('koa-router');
const router = new Router();

router.get('/', (ctx) => {
  ctx.body = 'Hello World';
})

module.exports = router