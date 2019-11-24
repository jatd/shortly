const express = require('express');
const ItemController = require('../controllers/ItemController');
const ItemControllerPolicy = require('../policies/ItemControllerPolicy');

const itemRouter = express.Router();

itemRouter.post('/', ItemControllerPolicy, ItemController.create);
itemRouter.put('/:itemId', ItemControllerPolicy, ItemController.update);
itemRouter.delete('/', ItemController.delete);

module.exports = itemRouter;
