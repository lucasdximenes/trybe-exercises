const { Op } = require("sequelize");
const { Book } = require("../models");

const getAll = async () => {
  const books = await Book.findAll({
    order: [["title", "ASC"]],
  });
  return books;
};

const getById = async (id) => {
  const book = await Book.findByPk(id);
  if (!book) {
    return {
      isError: true,
      payload: {
        message: "Not found",
      },
    };
  }
  return {
    isError: false,
    payload: book,
  };
};

const getByAuthor = async (author) => {
  const books = await Book.findAll({
    where: {
      author: {
        [Op.like]: `%${author}%`,
      },
    },
    order: [["title", "ASC"]],
  });
  if (!books.length) {
    return {
      isError: true,
      payload: {
        message: "Not found",
      },
    };
  }
  return {
    isError: false,
    payload: books,
  };
};

const create = async (title, author, pageQuantity, publisher) => {
  const book = await Book.create({ title, author, pageQuantity, publisher });
  return book;
};

const update = async (id, title, author, pageQuantity, publisher) => {
  const [updated] = await Book.update(
    { title, author, pageQuantity, publisher },
    { where: { id } }
  );
  if (!updated) {
    return {
      isError: true,
      payload: {
        message: "Not found",
      },
    };
  }
  return {
    isError: false,
    payload: {
      message: "Updated successfully",
    },
  };
};

const remove = async (id) => {
  const deleted = await Book.destroy({ where: { id } });
  if (!deleted) {
    return {
      isError: true,
      payload: {
        message: "Not found",
      },
    };
  }
  return {
    isError: false,
    payload: {
      message: "Deleted successfully",
    },
  };
};

module.exports = {
  getAll,
  getById,
  getByAuthor,
  create,
  update,
  remove,
};
