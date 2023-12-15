const express = require('express');
const session = require('express-session');
const cors = require('cors');
const routes = require('./routes');
const crypto = require('crypto');

const app = express();
const PORT = 3001;
const secretKey = crypto.randomBytes(64).toString('hex');

app.use(cors());

app.use(express.json());

app.use(session({
    secret: secretKey,
    resave: true,
    saveUninitialized: true
}));

app.use('/api', routes);

app.listen(PORT, () => {
    console.log(`Serveur en cours sur le port ${PORT}`);
});
