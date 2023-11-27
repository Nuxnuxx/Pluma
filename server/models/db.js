// const mysql = require('mysql');

// const connection = mysql.createConnection({
//   host : 'localhost',
//   port : 3307,
//   user : 'anais',
//   password : 'dev',
//   database : 'pluma'
// });

/*
const mariadb = require('mariadb');
const pool = mariadb.createPool({
     host: "127.0.0.1",
     user:"anais", 
     password: "dev",
     database : "pluma",
     socketPath : "/run/mysqld/mysqld.sock"
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
      if (conn) conn.end();
    }
  }
}*/

const mariadb = require('mariadb');
const pool = mariadb.createPool({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: 'coucou123',
    database: 'pluma',
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
