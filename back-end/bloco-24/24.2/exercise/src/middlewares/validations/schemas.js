const Joi = require("joi");

const accountSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  phone: Joi.string().required(),
});

const commentSchema = Joi.string().required().messages({
  "string.base": `"message" should be a type of 'text'`,
  "string.empty": `"message" cannot be an empty field`,
  "any.required": `"message" is a required field`,
});

module.exports = {
  accountSchema,
  commentSchema,
};
