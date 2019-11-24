const express = require('express');
const ListController = require('../controllers/ListController');
const ListControllerPolicy = require('../policies/ListControllerPolicy');

const listRouter = express.Router();

listRouter.get('/', ListController.findAll);
listRouter.get('/:listId', ListController.getOne);
listRouter.post('/', ListControllerPolicy, ListController.create);

module.exports = listRouter;
