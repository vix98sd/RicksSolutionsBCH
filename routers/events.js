const express = require('express')
const bodyParser = require('body-parser')

const router = new express.Router()

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: false }))

const mysql = require('../middleware/database')
const pool = mysql.getPool()

router.get('/events', (req, res) => {
    pool.getConnection((error, connection) => {
        if (error) throw error
        const sql = `SELECT * FROM events`
        connection.query(sql, (error, result) => {
            if (error) throw error
            res.render('events', { event: result, user: 'Korisnik' })
        })
    })
})

module.exports = router