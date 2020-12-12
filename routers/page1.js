const express = require('express')

const router = new express.Router()

const mysql = require('../middleware/database')
const pool = mysql.getPool()

router.get('/page1', (req, res) => {
    pool.getConnection((error, connection) => {
        if (error) throw error
        const sql = 'SELECT 1 + 1'
        if (error) throw error
        connection.query(sql, (error, result) => {
            if (error) throw error
            console.log(result)
            res.send('success')
        })
    })
})

module.exports = router