const express = require('express');
const UserController = require('./controllers/userController');

const router = express.Router();

router.get('/', UserController.getAllUsers);
router.post('/', UserController.addUser);

router.get('/api/mon-espace', (req, res) => {
    // Gérer la route /api/mon-espace ici
});

module.exports = router;
