const connection = require('./connection');

const create = async ({ title, directedBy, releaseYear }) => {
  const [result] = await connection
    .execute(
      "INSERT INTO model_example.movies (title, directed_by, release_year) VALUES (?, ?, ?)",
      [title, directedBy, releaseYear]
    );

  return {
    id: result.insertId,
  };
};

const getAll = async () => {
  const [ res ] = await connection.execute(
    "SELECT * FR0M model_example.movies;"
  );
  return res
}

module.exports = {
  create,
  getAll,
};