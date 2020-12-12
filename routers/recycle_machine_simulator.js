const express = require('express')
const bodyParser = require('body-parser')

const router = new express.Router()

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: false }))

const mysql = require('../middleware/database')
const pool = mysql.getPool()

router.get('/recycle_machine_simulator', (req, res) => {
    var user = { username: req.query.username, points: req.query.points }
    return res.render('recycle_machine_simulator', { user })
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

router.post('/recycle_machine_simulator', (req, res) => {
    var user = { username: req.query.username, points: req.query.points }
    pool.getConnection((error, connection) => {
        if (error) throw error
        const sql = `INSERT INTO points_log (username, transaction, date, time, event, points) VALUES (
            '${req.body.username}', 
            '${req.body.transaction}', 
            '${req.body.date}', 
            '${req.body.time}', 
            ${req.body.event === null ? null : "'" + req.body.event + "'"}, 
            ${req.body.points}
            )`
        return console.log(sql)
        connection.query(sql, (error, result) => {
            if (error) throw error
            return res.render('recycle_machine_simulator', { user })
        })
    })
})

module.exports = router