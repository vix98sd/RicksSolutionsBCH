const express = require('express')

const router = new express.Router()

router.get('/page4', (req, res) => {
    res.send('I am page 4')
})

module.exports = router