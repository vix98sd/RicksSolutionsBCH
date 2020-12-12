const express = require('express')

const mysql = require('../middleware/database')

const router = new express.Router()
const pool = mysql.getPool()

router.get('/', (req, res) => {
    res.redirect('/events')
})

module.exports = router