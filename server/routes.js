const express = require('express');
const UserController = require('./controllers/userController');

const router = express.Router();

router.get('/api/user', UserController.getAllUsers);
router.post('/api/user', UserController.addUser);

module.exports = router;
