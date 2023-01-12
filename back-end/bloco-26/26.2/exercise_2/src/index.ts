import Book from './database/models/Book';
import Author from './database/models/Author';
import sequelize from 'sequelize';

const main = async () => {
  const data = await Author.findAll({
    raw: true,
    subQuery: false,
    include: [
      {
        model: Book,
        as: 'books',
        attributes: [],
      },
    ],
    attributes: [
      ['name', 'author'],
      [sequelize.fn('COUNT', sequelize.col('books.id')), 'booksCount'],
    ],
    group: ['authors.id'],
    order: [[sequelize.fn('COUNT', sequelize.col('books.id')), 'DESC']],
  });
  console.log(data);
  process.exit(0);
};

main();
