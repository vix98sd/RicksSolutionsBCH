const express = require('express')
const bodyParser = require('body-parser')

const router = new express.Router()

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: false }))

const connection = require('../middleware/database')

router.get('/user', (req, res) => {
    var user = { username: req.query.username, points: req.query.points }
    return res.render('user', { user })
})

router.post('/user', (req, res) => {
    var sql = `SELECT points FROM redeem_codes WHERE code = '${req.body.code}' AND used = 'FALSE'`
    connection.query(sql, (error, result) => {
        if (error) throw error
        if (result.length !== 0) {
            var points = result[0].points
            sql = `UPDATE redeem_codes SET used = 'TRUE' WHERE code = '${req.body.code}'`
            connection.query(sql, (error, result) => {
                if (error) throw error
                sql = `UPDATE users SET points = points + ${points} WHERE username = '${req.body.query[1]}'`
                connection.query(sql, (error, result) => {
                    if (error) throw error
                    sql = `SELECT points FROM users WHERE username = '${req.body.query[1]}'`
                    connection.query(sql, (error, result) => {
                        if (error) throw error
                        var user = { username: req.body.query[1], points: result[0].points }
                        res.render('user', { user })
                    })
                })
            })
        }
    })
})
module.exports = router