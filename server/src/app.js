const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const db = require('./models');
const configData = require('./config/config');

const app = express();

app.use(morgan('combine'));
app.use(bodyparser.json());
app.use(cors());

require('./routes')(app);

db.sequelize.sync().then(() => {
  app.listen(configData.port);
  console.log(`Server started on port ${configData.port}`);
});
