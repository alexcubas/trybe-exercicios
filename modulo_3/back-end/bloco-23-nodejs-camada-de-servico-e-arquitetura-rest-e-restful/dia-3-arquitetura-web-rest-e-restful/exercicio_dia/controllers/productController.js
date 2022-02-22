const express = require('express');
const productService = require('../service/productService');

const router = express.Router();

router.get('/', async (_req, res) => {
  const { code, data } = await productService.getAll();

  res.status(code).json(data);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  const { code, data } = await productService.getById(id);

  res.status(code).json(data);
});

router.post('/', async (req, res) => {
  const { name, brand } = req.body;

  const { code, data } = await productService.add(name, brand);

  return res.status(code).json(data);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;adw

  const { code, data } = await productService.exclude(id);

  res.status(code).end();
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, brand } = req.body;

  const { code } = await ProductModel.update(id, name, brand);

  res.status(code).end();
});

module.exports = router;