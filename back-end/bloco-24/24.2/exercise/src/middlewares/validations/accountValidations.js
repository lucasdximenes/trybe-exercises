const { accountSchema, commentSchema } = require("./schemas");

const validateAccount = (account) => {
  const { error } = accountSchema.validate(account);

  if (error) {
    return {
      isError: true,
      payload: {
        statusCode: 400,
        message: error.details[0].message,
      },
    };
  }

  return {
    isError: false,
  };
};

const validateComment = (comment) => {
  const { error } = commentSchema.validate(comment);

  if (error) {
    return {
      isError: true,
      payload: {
        statusCode: 400,
        message: error.details[0].message,
      },
    };
  }

  return {
    isError: false,
  };
};

module.exports = {
  validateAccount,
  validateComment,
};
