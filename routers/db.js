const express = require('express')

const mysql = require('../middleware/database')
const pool = mysql.getPool()

const router = new express.Router()

router.get('/db/:name', (req, res) => {
    pool.getConnection((error, connection) => {
        if (error) throw error
        const sql = `DESCRIBE ${req.params.name}`
        if (error) throw error
        connection.query(sql, (error, result) => {
            if (error) throw error
            res.send(`<pre>${JSON.stringify(result, null, "  ")}</pre>`)
        })
    })
})

module.exports = router