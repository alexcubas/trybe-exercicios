const productModel = require('../models/productModel');

const getAll = async () => {
  const productId = await productModel.getAll();

  return { code: 200, data: productId }
}

const getById = async (id) => {
  const productId = await productModel.getById(id);

  if (productId.length === 0) return { code: 404, data: { message: 'Product Not Found' }}

  return { code: 200, data: productId }
}

const postService = async (name, brand) => {

  if (!name || !brand) return { code: 422, data: { message: 'name or brand is invalid' }}

  const created = await productModel.add(name, brand)

  return { code: 200, data: created }
}

const exclude = async (id) => {
  await productModel.exclude(id)
  return { code: 201 }
}

const update = async (id, name, brand) => {
  await productModel.update(id, name, brand)
  return{ code: 201 }
}

module.exports = {
  getById,
  getAll,
  postService,
  exclude,
  update
}