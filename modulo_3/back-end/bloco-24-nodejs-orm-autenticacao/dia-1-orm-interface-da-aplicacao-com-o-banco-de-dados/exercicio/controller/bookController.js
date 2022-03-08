const { Book } = require('../models');

const getAll = async (_req, res, next) => {
  try {
    const all = await Book.findAll({
      order: [
        ['title', 'ASC'],
        ['createdAt', 'ASC']
      ]
    })

    return res.status(200).json(all);
  } catch (error) {
    next(error)
  }
}

const getById = async (req, res, next) => {
  try {
    const { id } = req.params

    const byId = await Book.findByPk(id);

    return res.status(200).json(byId);
  } catch (error) {
    next(error)
  }
}

const getByAuthor = async (req, res, next) => {
  try {
    const { author } = req.query;
    const result = await Book.findAll({ where: { author } });
    return res.status(200).json(result)

  } catch (error) {
    next(error)
  }
}

const create = async (req, res, next) => {
  try {
    const { title, author, pageQuantity } = req.body;

    const created = await Book.create({ title, author, pageQuantity })

    return res.status(201).json(created);
  } catch (error) {
    next(error)
  }
}

const update = async (req, res, next) => {
  try {
    const { title, author, pageQuantity } = req.body;
    const { id } = req.params;

    const [up] = await Book.update(
      { title, author, pageQuantity },
      { where: { id } }
    )

      if (!up) return res.status(404).json({ message: "livro nao encontrado" })

    return res.status(200).json({ message: 'livro atualizado' })
  } catch (error) {
    next(error)
  }
}

const destroy = async (req, res, next) => {
  try {
    const { id } = req.params

    const destruido = await Book.destroy({ where: { id } })
    console.log(destruido)

    if(!destruido) return res.status(404).json({ message: "livro nao encontrado" }) 

    return res.status(202).json({ message: "livro deletado" })

  } catch (error) {
    next(error)
  }
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  destroy,
  getByAuthor,
}