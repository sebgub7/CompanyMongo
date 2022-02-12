const Product = require('../models/product.models');

exports.getAll = async (req, res) => {
  try {
    res.json(await Product.find());
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.getRandom = async (req, res) => {
  try {
    const count = await Product.countDocuments();
    const rand = Math.floor(Math.random() * count);
    const dep = await Product.findOne().skip(rand);
    if (!dep) res.status(404).json({ message: 'Not found ..' });
    else res.json(dep);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.getItem = async (req, res) => {
  try {
    const dep = await Product.findById(req.params.id);
    if (!dep) res.status(404).json({ message: 'Not found' });
    else res.json(dep);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.postItem = async (req, res) => {
  try {
    const { name, client } = req.body;
    const newProduct = new Product({
      name: name,
      client: client,
    });
    await newProduct.save();
    res.json({ message: 'OK ' });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.putItem = async (req, res) => {
  try {
    const { name, client } = req.body;
    const dep = await Product.findById(req.params.id);
    if (dep) {
      await Product.updateOne(
        { _id: req.params.id },
        {
          $set: {
            name: name,
            client: client,
          },
        }
      );
      res.json({ message: 'OK ' });
    } else res.status(404).json({ message: 'Not found ...' });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.deleteItem = async (req, res) => {
  try {
    const dep = await Product.findById(req.params.id);
    if (dep) {
      await Product.remove(dep);
      res.json({ message: 'OK' });
    } else res.status(404).json({ message: 'NOT FOUND.. ' });
  } catch (err) {
    req.status(500).json({ message: err });
  }
};