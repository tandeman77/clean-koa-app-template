const Router = require('koa-router');
const router = new Router({ prefix: '/auth' });
const bcrypt = require('bcrypt');
const { registerValidation, loginValidation } = require('../helpers/validations/authValidation');
const jwt = require('jsonwebtoken');

//temporary user variable
let Users = []

//REGISTER ROUTE
router.post('/register', async (ctx) => {
  if (ctx.request.body) {
    const { error } = registerValidation(ctx.request.body);
    if (error) ctx.body = error.details[0].message;
  }
  const hashedPassword = await bcrypt.hash(ctx.request.body.password, 10);
  const user = {
    _id: Users.length + 1,
    username: ctx.request.body.username,
    password: hashedPassword,
    email: ctx.request.body.email
  };

  Users.push(user);
  ctx.body = Users;
});

//LOGIN route
router.post('/login', async (ctx) => {
  if (ctx.request.body) {
    const { error } = loginValidation(ctx.request.body);
    if (error) ctx.body = error.details[0].message;
  }
  //check if user exists
  const user = Users.find((user) => {
    return user.username === ctx.request.body.username
  });
  ctx.body = user
  if (!user) {
    ctx.response.status = 400;
    ctx.body = 'user doesn\'t exist';
    return
  }

  //check if password is the same
  const passwordValidation = await bcrypt.compare(ctx.request.body.password, user.password);
  if (!passwordValidation) {
    ctx.body = 'password is wrong';
    ctx.response.status = 400;
    return
  }

  //login sucessful = return jwt
  const token = jwt.sign({
    _id: user._id,
    username: user.username,
    email: user.email
  }, process.env.TOKEN_SALT);
  ctx.cookies.set('auth', token, {
    maxAge: 43200000,
    expires: Date.now() + 43200000
  });
  ctx.body = token;
});

module.exports = router