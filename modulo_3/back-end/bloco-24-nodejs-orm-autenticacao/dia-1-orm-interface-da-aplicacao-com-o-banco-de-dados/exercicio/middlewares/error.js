module.exports = (err, _req, res, _next) => {
  console.error(err.stack);
  res.status(500).send('Algo deu errado');
}