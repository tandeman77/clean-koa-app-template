"use strict";

const jwt = require('jsonwebtoken');

module.exports.requireAuth = async function (ctx, next) {
  const token = ctx.get('auth-token');
  if (!token) {
    ctx.response.status = 401
  }
  try {
    const verifiedToken = jwt.verify(token, process.env.TOKEN_SALT);
    ctx.request.user = verifiedToken;
    await next();
  } catch (error) {
    console.error(error);
    ctx.response.status = 500;
  }
}

