const mariadb = require('mariadb');

const pool = mariadb.createPool({
     // host: '192.168.1.69',
     host: '10.1.138.41',
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
