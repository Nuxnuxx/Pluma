const pool = require('../models/db');
const bcrypt = require('bcrypt');

const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const result = await pool.query('SELECT * FROM utilisateur WHERE pseudo = ? OR mail = ?', [username, username]);

        if (result.length > 0) {
            const match = await bcrypt.compare(password, result[0].password);

            if (match) {
                req.session.user = result[0];
                res.json({ success: true, message: 'Authentification réussie' });
            } else {
                res.json({ success: false, message: 'Mot de passe incorrect' });
            }
        } else {
            res.json({ success: false, message: 'Nom d\'utilisateur ou email incorrect' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Erreur interne du serveur' });
    }
};

const register = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const result = await pool.query('INSERT INTO utilisateur (username, email, password) VALUES (?, ?, ?)', [username, email, hashedPassword]);
        res.json({ success: true, message: 'Inscription réussie' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Erreur interne du serveur' });
    }
};

module.exports = { login, register };