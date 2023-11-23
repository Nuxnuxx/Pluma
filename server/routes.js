const express = require('express');
const UserController = require('./controllers/userController');
const pool = require('./models/BDD');

const router = express.Router();

router.get('/', UserController.getAllUsers);
router.post('/', UserController.addUser);

router.get('/api/mon-espace', (req, res) => {
    // Gérer la route /api/mon-espace ici
});

router.get('/bdd', async (req, res) => {
  try {
    const rows = await query("SELECT * FROM abonnement");
    console.log(rows);
    res.status(200).json(rows);  // Envoyer les données JSON à la réponse HTTP
  } catch (err) {
    console.error(err);
    res.status(500).send('Erreur lors de la requête à la base de données');
  }
});

module.exports = router;