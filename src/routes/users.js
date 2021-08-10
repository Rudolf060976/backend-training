const express = require('express');

const router = express.Router();

const myMiddleware = require('../middleware/myMiddleware');

const usersControllers = require('../controllers/usersControllers');

router.get('/getAll',
  myMiddleware('Profesional'),
  usersControllers.getAll);

router.get('/user:userId', usersControllers.getUser);

module.exports = router;
