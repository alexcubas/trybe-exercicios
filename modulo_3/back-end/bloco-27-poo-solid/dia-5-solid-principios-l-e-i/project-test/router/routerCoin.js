const express = require('express');

const bitcoin = require('../controllers/priceController')

const router = express.Router();

router.get('/', bitcoin.getPrice);