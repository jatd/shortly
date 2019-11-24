const authRouter = require('./routes/authentication');
const listRouter = require('./routes/list');
const itemRouter = require('./routes/item');

module.exports = app => {
  app.use('*', (res, req, next) => {
    // Add Authentication Here
    next();
  });
  app.use('/auth', authRouter);
  app.use('/lists', listRouter);
  app.use('/items', itemRouter);
};
