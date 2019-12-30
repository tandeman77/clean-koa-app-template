const Joi = require('@hapi/joi');

module.exports.registerValidation = function (data) {
  const schema = Joi.object({
    username: Joi.string().alphanum().min(3).max(20).required(),
    password: Joi.string().min(3).max(100).required(),
    email: Joi.string().email().required()
  })
  return schema.validate(data);
}