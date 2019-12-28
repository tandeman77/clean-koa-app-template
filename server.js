const env = require('dotenv').config();
const Koa = require('koa');
const body = require('koa-body');

const app = new Koa();

app.listen(process.env.PORT, () => {
  console.log('app is working on port ' + process.env.PORT);
});