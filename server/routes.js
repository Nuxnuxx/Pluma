const express = require('express');
const pool = require('./models/db');

const router = express.Router();

// Routes pour le CRUD
router.post('/create/:table', async (req, res) => {
  const nomTable = req.params.table;

  try {
    const { nom, description } = req.body;
    const result = await pool.query(`INSERT INTO ${nomTable} (nom, description) VALUES (?, ?)`, [nom, description]);
    res.json({ success: true, data: result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});


//READ
router.get('/readTable/:table', async (req, res) => {
  const nomTable = req.params.table;

  try {
    const result = await pool.query(`SELECT * FROM ${nomTable}`);
    res.json({ success: true, data: result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

// Route pour récupérer les projets récents
router.get('/read-projets-recents', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM projet ORDER BY derniere_consultation DESC LIMIT 5');
    res.json({ success: true, data: result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Internal Server Error1' });
  }
});

// Route pour récupérer les projets favoris
router.get('/read-projets-favoris', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM projet WHERE favori = true');
    res.json({ success: true, data: result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

// Route pour récupérer les informations d'un seul projet
router.get('/readElement/projet/:id', async (req, res) => {
  const id = req.params.id;

  try {
    const result = await pool.query(`SELECT * FROM projet WHERE id_projet = ${id}`);
    res.json({ success: true, data: result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

router.put('/update/:table/:id', async (req, res) => {
  const nomTable = req.params.table;

  try {
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