const express = require('express');

const router = express.Router();

const myMiddleware = require('../middleware/myMiddleware');

const usersControllers = require('../controllers/usersControllers');

const userValidator = require('../validators/users');

const joiValidationMiddleware = require('../middleware/joi');

router.get('/getAll',
  myMiddleware('Profesional'),
  usersControllers.getAll);

router.get('/user/:userId',
  joiValidationMiddleware(userValidator.getUserParams, 'params'),
  joiValidationMiddleware(userValidator.getUserQuery, 'query'),
  usersControllers.getUser);

module.exports = router;
