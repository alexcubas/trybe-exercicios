const connection = require('./connection');

const create = async (user) => {
  const [ result ] = await connection.execute(
    'INSERT INTO model_example.user (first_name, last_name, email, password) VALUES (?, ?, ?, ?);',
    [ user.first_name, user.last_name, user.email, user.password ]
  );

  return {
    id: result.insertId,
    ...user,
  }
}

const getAll = async () => {
  const [ res ] = await connection.execute('SELECT * FROM model_example.user')

  return res
}

const getId = async (id) => {
  const [ res ] = await connection.execute('SELECT * FROM model_example.user WHERE id = ?', [id]
  )
  
  return res
}

const putUser = async (user) => {
  await connection.execute(`UPDATE model_example.user
   SET first_name = ?, last_name = ?, email = ?, password = ? WHERE id = ?`, [user.first_name, user.last_name, user.email, user.password, user.id])

   return {
      id: user.id,
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
   };
}

const deleteUser = async (id) => {
  await connection.execute(`DELETE FROM model_example.user WHERE id = ?`, [ id ])
}

module.exports = {
  create,
  getAll,
  getId,
  putUser,
  deleteUser,
}