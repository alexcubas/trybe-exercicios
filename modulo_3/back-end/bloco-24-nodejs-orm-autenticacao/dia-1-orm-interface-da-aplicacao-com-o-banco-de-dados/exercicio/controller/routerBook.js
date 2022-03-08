const express = require('express');

const book = require('./bookController');

const router = express.Router();

router.get('/', book.getAll);

router.get('/search', book.getByAuthor);

router.get('/:id', book.getById);

router.post('/', book.create);

router.put('/:id', book.update);

router.delete('/:id', book.destroy);

module.exports = router;