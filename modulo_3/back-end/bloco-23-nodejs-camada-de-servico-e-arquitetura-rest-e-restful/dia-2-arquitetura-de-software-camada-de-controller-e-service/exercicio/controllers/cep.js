const serviceCep = require('../service/serviceCep');

const queryCep = async (req, res) => {
  const { cep } = req.params;

  const retornoCep = await serviceCep.cepService(cep);

  return res.status(200).json(retornoCep);
}

module.exports = {
  queryCep,
}