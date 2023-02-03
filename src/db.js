const { Pool } = require('pg');
const pool = new Pool({
    user:process.env.PGUSER,
    hots:process.env.PGHOST,
    database:process.env.PGDATABASE,
    password:process.env.PGPASSWORD,
    port:process.env.PGPORT,
})

module.exports = pool;