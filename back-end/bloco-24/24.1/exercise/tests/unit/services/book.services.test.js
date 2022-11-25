const { expect } = require("chai");
const sinon = require("sinon");
const { Book } = require("../../../src/models");
const BookService = require("../../../src/services/BooksService");

const books = [
  {
    id: 1,
    title: "Harry Potter and the Philosopher's Stone",
    author: "J. K. Rowling",
    pageQuantity: 223,
    publisher: "Bloomsbury",
    createdAt: "2021-03-01T12:00:00.000Z",
    updatedAt: "2021-03-01T12:00:00.000Z",
  },
  {
    id: 2,
    title: "Harry Potter and the Chamber of Secrets",
    author: "J. K. Rowling",
    pageQuantity: 251,
    publisher: "Bloomsbury",
    createdAt: "2021-03-01T12:00:00.000Z",
    updatedAt: "2021-03-01T12:00:00.000Z",
  },
];

describe("BookService", function () {
  beforeEach(sinon.restore);
  describe("getAll", function () {
    it("should return a list of books", async function () {
      const findAll = sinon.stub(Book, "findAll");
      findAll.returns(books);
      const expected = books;
      const result = await BookService.getAll();
      expect(result).to.be.deep.equal(expected);
    });
  });

  describe("getById", function () {
    it("should return a book when passed an id", async function () {
      const findByPk = sinon.stub(Book, "findByPk");
      findByPk.returns(books[0]);
      const expected = books[0];
      const result = await BookService.getById(1);
      expect(result).to.be.deep.equal({
        isError: false,
        payload: expected,
      });
    });

    it("should return an error when the book is not found", async function () {
      const findByPk = sinon.stub(Book, "findByPk");
      findByPk.returns(null);
      const expected = {
        isError: true,
        payload: {
          message: "Not found",
        },
      };
      const result = await BookService.getById(1);
      expect(result).to.be.deep.equal(expected);
    });
  });

  describe("getByAuthor", function () {
    it("should return a list of books when passed an author", async function () {
      const findAll = sinon.stub(Book, "findAll");
      findAll.returns(books);
      const expected = books;
      const result = await BookService.getByAuthor("J. K. Rowling");
      expect(result).to.be.deep.equal({
        isError: false,
        payload: expected,
      });
    });

    it("should return an error when the author is not found", async function () {
      const findAll = sinon.stub(Book, "findAll");
      findAll.returns([]);
      const expected = {
        isError: true,
        payload: {
          message: "Not found",
        },
      };
      const result = await BookService.getByAuthor("J. K. Rowling");
      expect(result).to.be.deep.equal(expected);
    });
  });

  describe("create", function () {
    it("should create a book when passed valid parameters", async function () {
      const create = sinon.stub(Book, "create");
      create.returns(books[0]);
      const expected = books[0];
      const result = await BookService.create(
        "Harry Potter and the Philosopher's Stone",
        "J. K. Rowling",
        223,
        "Bloomsbury"
      );
      expect(result).to.be.deep.equal(expected);
    });
  });

  describe("update", function () {
    it("should update a book when passed valid parameters", async function () {
      const update = sinon.stub(Book, "update");
      update.returns([1]);
      const expected = {
        isError: false,
        payload: {
          message: "Updated successfully",
        },
      };
      const result = await BookService.update(
        1,
        "Harry Potter and the Philosopher's Stone",
        "J. K. Rowling",
        223,
        "Bloomsbury"
      );
      expect(result).to.be.deep.equal(expected);
    });

    it("should return an error when the book is not found", async function () {
      const update = sinon.stub(Book, "update");
      update.returns([0]);
      const expected = {
        isError: true,
        payload: {
          message: "Not found",
        },
      };
      const result = await BookService.update(
        1,
        "Harry Potter and the Philosopher's Stone",
        "J. K. Rowling",
        223,
        "Bloomsbury"
      );
      expect(result).to.be.deep.equal(expected);
    });
  });

  describe("delete", function () {
    it("should delete a book when passed an id", async function () {
      const destroy = sinon.stub(Book, "destroy");
      destroy.returns(1);
      const expected = {
        isError: false,
        payload: {
          message: "Deleted successfully",
        },
      };
      const result = await BookService.remove(1);
      expect(result).to.be.deep.equal(expected);
    });

    it("should return an error when the book is not found", async function () {
      const destroy = sinon.stub(Book, "destroy");
      destroy.returns(0);
      const expected = {
        isError: true,
        payload: {
          message: "Not found",
        },
      };
      const result = await BookService.remove(1);
      expect(result).to.be.deep.equal(expected);
    });
  });
});
