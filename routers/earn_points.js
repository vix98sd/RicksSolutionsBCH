const express = require('express')
const bodyParser = require('body-parser')

const router = new express.Router()

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: false }))

const mysql = require('../middleware/database')
const pool = mysql.getPool()

router.get('/earn_points', (req, res) => {
    var user = { username: req.query.username, points: req.query.points }
    return res.render('earn_points', {user})
    pool.getConnection((error, connection) => {
        if (error) throw error
        const sql = `SELECT 1 + 1`
        if (error) throw error
        connection.query(sql, (error, result) => {
            if (error) throw error
            res.render('user', {result})
        })
    })
})

module.exports = router