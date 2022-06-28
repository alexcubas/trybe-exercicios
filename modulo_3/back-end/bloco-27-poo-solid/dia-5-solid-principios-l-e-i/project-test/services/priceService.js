const priceModel = require('../models/priceModel')

const getPrice = async () => {
  const resp = await priceModel.getPrice();

  return resp;
}