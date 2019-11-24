const Joi = require('joi');

module.exports = (req, res, next) => {
  const schema = {
    name: Joi.string(),
    userId: Joi.string(),
  };

  const { error } = Joi.validate(req.body, schema);

  if (error) {
    switch (error.details[0].context.key) {
      case 'name':
        res.status(400).send({
          error: 'You must provide a name for this list',
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
