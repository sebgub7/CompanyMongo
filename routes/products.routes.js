const express = require('express');
const router = express.Router();
const {
  getAll,
  getRandom,
  getItem,
  postItem,
  putItem,
  deleteItem,
} = require('../controllers/products.controller');

router.get('/products', getAll);

router.get('/products/random', getRandom);

router.get('/products/:id', getItem);

router.post('/products', postItem);

router.put('/products/:id', putItem);

router.delete('/products/:id', deleteItem);

module.exports = router;