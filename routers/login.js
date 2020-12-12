const express = require('express')

const mysql = require('../middleware/database')

const router = new express.Router()
const pool = mysql.getPool()

router.get('/', (req, res) => {
    res.sendFile(__dirname + '/login/index.html');
})

module.exports = router