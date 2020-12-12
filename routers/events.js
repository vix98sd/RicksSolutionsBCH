const express = require('express')

const mysql = require('../middleware/database')
const pool = mysql.getPool()

const router = new express.Router()

router.get('/events', (req, res) => {
    pool.getConnection((error, connection) => {
        if (error) throw error
        const sql = 'SELECT * FROM dummytable'
        if (error) throw error
        connection.query(sql, (error, result) => {
            if (error) throw error
            res.send(result)
        })
    })
})

module.exports = router