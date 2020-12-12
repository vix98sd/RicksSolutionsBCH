const express = require('express')

const mysql = require('../middleware/database')

const router = new express.Router()
const pool = mysql.getPool()

router.get('/', (req, res) => {
    pool.getConnection((error, connection) => {
        if (error) throw error
        const sql = 'SELECT 2 + 2'
        if (error) throw error
        connection.query(sql, (error, result) => {
            if (error) throw error
        })
    })
})

module.exports = router