const mariadb = require('mariadb');
/*const pool = mariadb.createPool({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: 'coucou123',
    database: 'pluma',
});*/
// Pool pour le serveur de prod
const pool = mariadb.createPool({
     host: '192.168.1.69',
     user:"anais", 
     password: "dev",
     database : "pluma",
});

module.exports = {
    pool,
    async query(sql, values) {
        let conn;
        try {
            conn = await pool.getConnection();
            return await conn.query(sql, values);
        } catch (err) {
            throw err;
        } finally {
            if (conn) await conn.end();
        }
    }
}
