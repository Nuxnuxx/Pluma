const express = require('express');
const app = express();
const port = 3000; 
// Le port sur lequel votre serveur écoutera
app.get('/', (req, res) => {   res.send('Hello, World!'); });
app.listen(port, () => {
    console.log(`Serveur en cours d exécution sur http://localhost:${port}`);
});
