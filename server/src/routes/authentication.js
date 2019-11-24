const express = require('express');
const AuthenticationController = require('../controllers/AuthenticationController');
const AuthenticationControllerPolicy = require('../policies/AuthenticationControllerPolicy');

const authRouter = express.Router();

authRouter.use(AuthenticationControllerPolicy);

authRouter.post('/register', AuthenticationController.register);
authRouter.post('/login', AuthenticationController.login);

module.exports = authRouter;
