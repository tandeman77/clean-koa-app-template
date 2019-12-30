const Router = require('koa-router');
const router = new Router({ prefix: '/auth' });
const bcrypt = require('bcrypt');
const { registerValidation } = require('../helpers/validations/authValidation');

let users = []
//REGISTER ROUTE
router.post('/register', (ctx) => {
  const { error } = registerValidation(ctx.request.body);
  if (error) ctx.body = error.details[0].message;
  users.push(ctx.request.body);
  ctx.body = users;
});

//LOGIN route
router.post('/login', (ctx) => {
  ctx.body = 'login';
})

module.exports = router