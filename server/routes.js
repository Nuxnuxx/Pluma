const express = require('express');
const UserController = require('./controllers/userController');
const pool = require('./models/db');

const router = express.Router();

// Routes pour le CRUD
router.post('/create/:table', async (req, res) => {
  const nomTable = req.params.table;

  try {
    // Il faudra voir comment gérer les paramètres de la requète
    const { nom, description } = req.body;
    const result = await pool.query(`INSERT INTO ${nomTable} (nom, description) VALUES (?, ?)`, [nom, description]);
    res.json({ success: true, data: result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

router.get('/read/:table', async (req, res) => {
  const nomTable = req.params.table;

  try {
    const result = await pool.query(`SELECT * FROM ${nomTable}`);
    res.json({ success: true, data: result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

router.put('/update/:table/:id', async (req, res) => {
  const nomTable = req.params.table;

  try {
    // Il faudra voir comment gérer les paramètres de la requète
    const { nom, description } = req.body;
    const result = await pool.query(`UPDATE ${nomTable} SET nom = ?, description = ? WHERE id = ?`, [nom, description, req.params.id]);
    res.json({ success: true, data: result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

router.delete('/delete/:table/:id', async (req, res) => {
  const nomTable = req.params.table;

  try {
    const result = await pool.query(`DELETE FROM ${nomTable} WHERE id = ?`, [req.params.id]);
    res.json({ success: true, data: result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

module.exports = router;