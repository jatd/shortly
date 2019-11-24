const Joi = require('joi');

module.exports = (req, res, next) => {
  const schema = {
    id: Joi.string(),
    description: Joi.string().allow(null),
    listId: Joi.string(),
    isCompleted: Joi.boolean(),
  };

  delete req.body.updatedAt;
  delete req.body.createdAt;

  const { error } = Joi.validate(req.body, schema);

  console.log('item error', error);

  if (error) {
    switch (error.details[0].context.key) {
      case 'description':
        res.status(400).send({
          error: 'Description needs to be a string',
        });
        break;
      case 'listId':
        res.status(400).send({
          error: 'listId is required',
        });
        break;
      default:
        res.status(400).send({
          error: 'Invalid information',
        });
    }
  } else {
    next();
  }
};
