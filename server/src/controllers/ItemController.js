const { Item } = require('../models');

module.exports = {
  async create(req, res) {
    try {
      const item = await Item.create(req.body);
      res.send(item);
    } catch (err) {
      console.error(err);
      res.status(400).send({
        error: 'An error occurred trying to create this item',
      });
    }
  },

  async update(req, res) {
    try {
      const [, item] = await Item.update(req.body, {
        where: {
          id: req.params.itemId,
        },
        returning: true,
        plain: true,
      });

      res.send(item);
    } catch (err) {
      console.error(err);
      res.status(400).send({
        error: 'An error occurred trying to update this item',
      });
    }
  },

  async delete(req, res) {
    const { id } = req.body;

    try {
      await Item.destroy({
        where: {
          id,
        },
      });
      res.sendStatus(204);
    } catch (err) {
      console.error(err);
      res.status(400).send({
        error: 'An error occurred trying to delete this item',
      });
    }
  },
};
