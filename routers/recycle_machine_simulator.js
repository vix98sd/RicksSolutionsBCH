const express = require('express')
const bodyParser = require('body-parser')

const router = new express.Router()

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: false }))

const mysql = require('../middleware/database')
const pool = mysql.getPool()

router.get('/recycle_machine_simulator', (req, res) => {
    return res.render('recycle_machine_simulator')
    pool.getConnection((error, connection) => {
        if (error) throw error
        const sql = `SELECT 1 + 1`
        if (error) throw error
        connection.query(sql, (error, result) => {
            if (error) throw error
            res.send(result)
        })
    })
})

module.exports = router