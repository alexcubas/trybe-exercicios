const serviceCep = require('../service/serviceCep');

const midCep = async (req, res, next) => {
  const { cep } = req.params;

  const retornoCep = await serviceCep.cepService(cep);

  if (!retornoCep) return res.status(400).json({ message: "CEP invalido" })

  if (retornoCep.length === 0) return res.status(404).json({ message: "CEP não encontrado" })

  next()
}

module.exports = {
  midCep,
}