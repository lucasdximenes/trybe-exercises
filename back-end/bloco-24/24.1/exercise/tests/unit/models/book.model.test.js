const { expect } = require("chai");
const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} = require("sequelize-test-helpers");
const { Book } = require("../../../src/models");
const BookModel = require("../../../src/models/Book");

// Without sequelize-test-helpers
describe("Book model", function () {
  it("should have a title, author, pageQuantity and publisher", function () {
    const book = new Book();
    expect(book).to.have.property("title");
    expect(book).to.have.property("author");
    expect(book).to.have.property("pageQuantity");
    expect(book).to.have.property("publisher");
  });
});

// With sequelize-test-helpers
describe("Book model", function () {
  const Book = BookModel(sequelize, dataTypes);
  const book = new Book();

  it('model name should be "Book"', function () {
    checkModelName(Book)("Book");
  });

  it("should have a title, author, pageQuantity and publisher", function () {
    ["title", "author", "pageQuantity", "publisher"].forEach(
      checkPropertyExists(book)
    );
  });
});
