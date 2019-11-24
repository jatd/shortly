const { List, Item } = require('../models');

module.exports = {
  async getOne(req, res) {
    try {
      const { listId } = req.params;
      const list = await List.findOne({
        where: {
          id: listId,
        },
        include: {
          model: Item,
          as: 'items',
          where: {
            listId,
          },
          required: false,
        },
      });
      res.send(list);
    } catch (err) {
      console.error(err);
      res.status(400).send({
        error: 'An error occurred trying to fetch the list',
      });
    }
  },
  async findAll(req, res) {
    try {
      const { userId } = req.query;
      const lists = await List.findAll({
        where: {
          userId,
        },
      });
      res.send(lists);
    } catch (err) {
      console.error(err);
      res.status(400).send({
        error: 'An error occurred fetching your lists',
      });
    }
  },

  async create(req, res) {
    try {
      const list = await List.create(req.body);
      res.send(list);
    } catch (err) {
      console.error(err);
      res.status(400).send({
        error: 'An error occurred trying to create a list',
      });
    }
  },
};
