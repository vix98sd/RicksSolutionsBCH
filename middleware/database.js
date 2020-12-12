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

// connection.connect((error) => {
//     if (error) {
//         throw Error(error)
//     }
//     console.log(`MySql connected { Database: ${condatabase} }`)
// })