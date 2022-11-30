const {
  validateAccount,
  validateComment,
} = require("./validations/accountValidations");

const validateAccountData = async (req, res, next) => {
  const { email, password, firstName, lastName, phone } = req.body;
  const account = { email, password, firstName, lastName, phone };
  const { isError, payload } = validateAccount(account);

  if (isError) {
    const { statusCode, message } = payload;
    return res.status(statusCode).json({ message });
  }

  next();
};

const validateCommentData = async (req, res, next) => {
  const { message } = req.body;
  console.log(message);
  const { isError, payload } = validateComment(message);

  if (isError) {
    const { statusCode, message } = payload;
    return res.status(statusCode).json({ message });
  }

  next();
};

module.exports = {
  validateAccountData,
  validateCommentData,
};
