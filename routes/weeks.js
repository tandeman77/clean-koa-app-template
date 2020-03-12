const Router = require("@koa/router");
const router = new Router({ prefix: "/weeks" });
const db = require("../db.js");
const Week = require("../models/Week.js");
const _ = require("lodash");

// show all weeks
router.get("/", async ctx => {
  const weeks = await Week.findAll();
  ctx.body = weeks;
});

//create new week
router.post("/new-week", async ctx => {
  const allowedFields = ["date", "income", "expense", "disabled", "freeWeek"];
  try {
    const newWeek = _.pick(ctx.request.body, allowedFields);
    res = await Week.create(newWeek);
    ctx.response.status = 200;
    ctx.body = res;
  } catch (e) {
    ctx.response.status = 500;
    console.error(e);
    ctx.body = { error: "error" };
  }
});

module.exports = router;
