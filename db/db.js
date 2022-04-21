const { Pool } = require('pg')

const pool = new Pool({
    "user": "postgres" ||"volleyad415",
    "password": "root" || "9818053236",
    "database": "shopping" || "postgres",
    "host": "localhost" || "try123.cyxyozhdltc4.ap-south-1.rds.amazonaws.com",
    "port": 5432

})

module.exports = pool;