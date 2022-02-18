const userModel = require('../model/user');

const createe = async (req, res) => {
  const { first_name, last_name, email, password } = req.body;

  const created = await userModel.create({ first_name, last_name, email, password })

  return res.status(201).json(created)
}

const getal = async (_req, res) => {
  const pegando = await userModel.getAll()

  return res.status(200).json(pegando)
}

const getById = async (req, res) => {
  try {
    const { id } = req.params;

    const byId = await userModel.getId(id)  

    if (byId.length === 0) return res.status(404).json({ message: "Usuário não encontrado" });

    return res.status(200).json(byId);
  } catch (e) {
    next(e)
  }
}

const attUser = async (req, res) => {
  const { id } = req.params;

  const byId = await userModel.getId(id);

  if (byId.length === 0) return res.status(404).json({ message: "Usuário não encontrado" });

  const { first_name, last_name, email, password } = req.body;

  const updateUser = await userModel.putUser({first_name, last_name, email, password, id})

  return res.status(201).json(updateUser);
}

const exclude = async (req, res) => {
  const { id } = req.params;

  const byId = await userModel.getId(id);

  if (byId.length === 0) return res.status(404).json({ message: "Usuário não encontrado" });

  await userModel.deleteUser(id);

  return res.status(201).end()
}

module.exports = {
  createe,
  getal,
  getById,
  attUser,
  exclude,
}