const pg = require("pg");
const Pool = pg.Pool;

/*require('dotenv').config()


const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DBNAME,
    port: process.env.DB_PORT,
});*/

const pool = new Pool({
    host: "192.168.1.22",
    user: "pi",
    password: "AZERTYUIOP",
    database: "smartclass",
    port: 5432,
});

module.exports = pool;