const express = require('express');
const UserController = require('./controllers/userController');

const router = express.Router();

router.get('/', UserController.getAllUsers);
router.post('/', UserController.addUser);


router.get('/mon-espace/', );
module.exports = router;
