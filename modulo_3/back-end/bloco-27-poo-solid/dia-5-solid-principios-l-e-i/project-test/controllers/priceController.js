const priceService = require('../services/priceService')

const getPrice = async (req, res) => {
  const response = await priceService.getPrice();

  return res.status(200).json(response);
}