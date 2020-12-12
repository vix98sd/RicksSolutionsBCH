const mysql = require('mysql')

const conhost = 'localhost'
const conuser = 'root'
const conpassword = ''
const condatabase = 'ricks_solutions'

var pool;
module.exports = {
    getPool: function () {
        if (pool) return pool
        pool = mysql.createPool({
            host: conhost,
            user: conuser,
            password: conpassword,
            database: condatabase,
            multipleStatements: true
        })
        return pool
    }
};

// pool.getConnection((error, connection) => {
//     if (error) throw error
//     const sql = `SELECT 1 + 1`
//     if (error) throw error
//     connection.query(sql, (error, result) => {
//         if (error) throw error
//         console.log(result)
//     })
// })