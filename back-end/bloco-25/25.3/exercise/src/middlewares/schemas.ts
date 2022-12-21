import joi from 'joi';

const nameSchema = joi.string().required().min(3).messages({
  'string.empty': 'Name is required',
  'string.min': 'Name must have at least 3 characters',
});

const emailSchema = joi.string().email().required().messages({
  'string.empty': 'Email is required',
  'string.email': 'Email must be a valid email',
});

const passwordSchema = joi.string().required().min(6).max(12).messages({
  'string.empty': 'Password is required',
  'string.min': 'Password must have at least 6 characters',
  'string.max': 'Password must have at most 12 characters',
});

export const newUserSchema = joi.object({
  name: nameSchema,
  email: emailSchema,
  password: passwordSchema,
});

export const loginUserSchema = joi.object({
  email: emailSchema,
  password: passwordSchema,
});
