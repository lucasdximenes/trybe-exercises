const { Account, Profile, Comment } = require("../models");

const getAccountWithProfileDataById = async (id) => {
  // This return Account and Profile data
  const account = await Account.findByPk(id, {
    include: [
      {
        model: Profile,
        as: "profile",
      },
    ],
  });

  if (!account) {
    return {
      isError: true,
      payload: {
        statusCode: 404,
        message: "Account not found",
      },
    };
  }

  return {
    isError: false,
    payload: account,
  };
};

const getOnlyAccountDataById = async (id) => {
  // This return only Account data
  const account = await Account.findByPk(id);

  if (!account) {
    return {
      isError: true,
      payload: {
        statusCode: 404,
        message: "Account not found",
      },
    };
  }

  return {
    isError: false,
    payload: account,
  };
};

const getCommentsByAccountId = async (id) => {
  // This return only comments data from an account
  const comments = await Comment.findAll({
    where: {
      accountId: id,
    },
  });

  if (!comments) {
    return {
      isError: true,
      payload: {
        statusCode: 404,
        message: "Comments not found",
      },
    };
  }

  return {
    isError: false,
    payload: comments,
  };
};

const createAccount = async (account) => {
  const { email, password, firstName, lastName, phone } = account;

  const { id } = await Account.create({
    email,
    password,
  });

  await Profile.create({
    firstName,
    lastName,
    phone,
    accountId: id,
  });

  const createdAccount = await getAccountWithProfileDataById(id);

  if (createdAccount.isError) {
    return createdAccount;
  }

  return createdAccount;
};

const createComment = async (comment, id) => {
  const createdComment = await Comment.create({
    message: comment,
    upvoting: 0,
    downvoting: 0,
    accountId: id,
  });

  return {
    isError: false,
    payload: createdComment,
  };
};

module.exports = {
  getAccountWithProfileDataById,
  getOnlyAccountDataById,
  getCommentsByAccountId,
  createAccount,
  createComment,
};
