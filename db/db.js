const { Pool } = require('pg')

const pool = new Pool({
    "user": "volleyad415" || "postgres",
    "password": "9818053236" || "root" ,
    "database":"postgres" || "shopping" ,
    "host": "try123.cyxyozhdltc4.ap-south-1.rds.amazonaws.com" || "localhost" ,
    "port": 5432

})

module.exports = pool;