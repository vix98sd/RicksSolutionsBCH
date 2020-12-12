const express = require('express')

const mysql = require('../middleware/database')

const router = new express.Router()
const pool = mysql.getPool()

router.get('/', (req, res) => {
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
router.get('/:name', (req, res) => {
    pool.getConnection((error, connection) => {
        if (error) throw error
        const sql = 'SELECT * FROM dummytable'
        if (error) throw error
        connection.query(sql, (error, result) => {
            if (error) throw error
            res.send(`${req.params.name} is a champion`)
        })
    })
})

module.exports = router