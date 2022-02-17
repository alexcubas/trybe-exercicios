const connection = require('./connection');

const getAll = async () => {
  const [book] = await connection.execute(
      'SELECT id, title, author_id FROM model_example.books;',
  );
  return book;
};

module.exports = {
  getAll,
};