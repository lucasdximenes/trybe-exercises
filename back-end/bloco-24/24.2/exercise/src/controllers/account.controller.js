const accountService = require("../services/account.service");

const getAccountById = async (req, res) => {
  const { id } = req.params;
  const { onlyAccountData } = req.query;
  console.log(onlyAccountData);
  let response;

  if (onlyAccountData === "true") {
    response = await accountService.getOnlyAccountDataById(id);
  } else {
    response = await accountService.getAccountWithProfileDataById(id);
  }

  if (response.isError) {
    const { statusCode, message } = response.payload;
    return res.status(statusCode).json({ message });
  }

  return res.status(200).json(response.payload);
};

const getCommentsByAccountId = async (req, res) => {
  const { id } = req.params;
  const response = await accountService.getCommentsByAccountId(id);

  if (response.isError) {
    const { statusCode, message } = response.payload;
    return res.status(statusCode).json({ message });
  }

  return res.status(200).json(response.payload);
};

const createAccount = async (req, res) => {
  const { email, password, firstName, lastName, phone } = req.body;
  const account = { email, password, firstName, lastName, phone };
  const response = await accountService.createAccount(account);

  if (response.isError) {
    const { statusCode, message } = response.payload;
    return res.status(statusCode).json({ message });
  }

  return res.status(201).json(response.payload);
};

const createComment = async (req, res) => {
  const { message } = req.body;
  const { id } = req.params;
  const response = await accountService.createComment(message, id);

  if (response.isError) {
    const { statusCode, message } = response.payload;
    return res.status(statusCode).json({ message });
  }

  return res.status(201).json(response.payload);
};

module.exports = {
  getAccountById,
  getCommentsByAccountId,
  createAccount,
  createComment,
};
