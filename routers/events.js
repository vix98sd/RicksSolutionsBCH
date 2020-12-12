const express = require('express')
const bodyParser = require('body-parser')

const router = new express.Router()

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: false }))

const mysql = require('../middleware/database')
const pool = mysql.getPool()

function dateFormatter(req, res, next) {
    const body = req.body
    const modifiedDate = body.date.split('-')
    body.date = modifiedDate[2] + '. '
    switch(modifiedDate[1]) {
        case '01': body.date += 'Jan. '
        break
        case '02': body.date += 'Feb. '
        break
        case '03': body.date += 'Mar. '
        break
        case '04': body.date += 'Apr. '
        break
        case '05': body.date += 'May '
        break
        case '06': body.date += 'Jun. '
        break
        case '07': body.date += 'Jul. '
        break
        case '08': body.date += 'Aug. '
        break
        case '09': body.date += 'Sep. '
        break
        case '10': body.date += 'Oct. '
        break
        case '11': body.date += 'Nov. '
        break
        case '12': body.date += 'Dec. '
        break
    }
    body.date += modifiedDate[0] + '.'
    next()
}

router.get('/events', (req, res) => {
    pool.getConnection((error, connection) => {
        if (error) throw error
        const sql = `SELECT * FROM events`
        if (error) throw error
        connection.query(sql, (error, result) => {
            if (error) throw error
            res.render('events', { event: result })
        })
    })
})

router.get('/events/new', (req, res) => {
    res.render('page5')
})

router.post('/events/new', dateFormatter, (req, res) => {
    const body = req.body

    pool.getConnection((error, connection) => {
        if (error) throw error
        const sql = `INSERT INTO events (title, image_url, points, date, time, location, description, visitors) VALUES (
            '${body.title}',
            '${body.image_url}',
            ${body.points},
            '${body.date}',
            '${body.time}',
            '${body.location}',
            '${body.description}',
            ${body.visitors}
        )`
        if (error) throw error
        connection.query(sql, (error, result) => {
            if (error) throw error
            res.redirect('/events')
        })
    })
})

module.exports = router