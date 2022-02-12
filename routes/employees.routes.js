const express = require('express');
const router = express.Router();
const {
  getAll,
  getRandom,
  getItem,
  postItem,
  putItem,
  deleteItem,
} = require('../controllers/employees.controller');

router.get('/employees', getAll);

router.get('/employees/random', getRandom);

router.get('/employees/:id', getItem);

router.post('/employees', postItem);

router.put('/employees/:id', putItem);

router.delete('/employees/:id', deleteItem);

module.exports = router;