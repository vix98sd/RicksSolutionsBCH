const express = require('express')
const bodyParser = require('body-parser')

const router = new express.Router()

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: false }))

const connection = require('../middleware/database')

router.get('/coupons', (req, res) => {
    const sql = `SELECT * FROM coupons`
    connection.query(sql, (error, result) => {
        if (error) throw error
        var user = { username: req.query.username, points: req.query.points }
        res.render('coupons', { coupon: result, user })
    })
})

module.exports = router