const connection = require('./connection');

const queryCep = async (cep) => {
  const [ res ] = await connection.execute(
    `SELECT * FROM cep_lookup.ceps
    WHERE cep = ?`,
    [ cep ]
  )
  return res;
} 

module.exports = {
  queryCep,
}