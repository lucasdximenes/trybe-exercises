const bookServices = require("../services/BooksService");

const getAll = async (req, res) => {
  const { author } = req.query;
  if (author) {
    const books = await bookServices.getByAuthor(author);
    if (books.isError) {
      return res.status(404).json(books.payload);
    }
    return res.status(200).json(books.payload);
  }
  const books = await bookServices.getAll();
  return res.status(200).json(books);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const book = await bookServices.getById(id);
  if (book.isError) {
    return res.status(404).json(book.payload);
  }
  return res.status(200).json(book.payload);
};

const create = async (req, res) => {
  const { title, author, pageQuantity } = req.body;
  const book = await bookServices.create(title, author, pageQuantity);
  return res.status(201).json(book);
};

const update = async (req, res) => {
  const { id } = req.params;
  const { title, author, pageQuantity } = req.body;
  const book = await bookServices.update(id, title, author, pageQuantity);
  if (book.isError) {
    return res.status(404).json(book.payload);
  }
  return res.status(200).json(book.payload);
};

const remove = async (req, res) => {
  const { id } = req.params;
  const book = await bookServices.remove(id);
  if (book.isError) {
    return res.status(404).json(book.payload);
  }
  return res.status(200).json(book.payload);
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
