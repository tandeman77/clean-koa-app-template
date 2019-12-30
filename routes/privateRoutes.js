const Router = require('@koa/router');
const router = new Router({ prefix: '/private' });
const { requireAuth } = require('../middlewares/authMiddleware');

router.use(requireAuth);

router.get('/', (ctx, next) => {
  ctx.body = {
    what: 'this is the new route'
  }
})

module.exports = router;