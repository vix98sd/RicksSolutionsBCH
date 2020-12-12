const express = require('express')
const bodyParser = require('body-parser')

const router = new express.Router()

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: false }))

const mysql = require('../middleware/database')
const pool = mysql.getPool()

router.get('/coupons', (req, res) => {
    pool.getConnection((error, connection) => {
        if (error) throw error
        const sql = `SELECT * FROM coupons`
        if (error) throw error
        connection.query(sql, (error, result) => {
            if (error) throw error
            var user = { username: req.query.username, points: req.query.points }
            res.render('coupons', {coupon: result, user})
        })
    })
})

module.exports = router