const Router = require("@koa/router");
const router = new Router({ prefix: "/users" });
const db = require("../db.js");
const User = require("../models/User.js");
const _ = require("lodash");

// show all Users
router.get("/", async ctx => {
  const users = await User.findAll();
  ctx.body = users;
});

//create new user
router.post("/register", async ctx => {
  const allowedFields = [
    "firstName",
    "lastName",
    "email",
    "balance",
    "gamePlayed",
    "banCount",
    "athleticism",
    "height",
    "bballIq",
    "shooting",
    "effort"
  ];
  try {
    const newUser = _.pick(ctx.request.body, allowedFields);
    res = await User.create(newUser);
    ctx.response.status = 200;
    ctx.body = res;
  } catch (e) {
    ctx.response.status = 500;
    console.error(e);
    ctx.body = { error: "error" };
  }
});

module.exports = router;
