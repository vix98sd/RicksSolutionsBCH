const express = require('express')

const router = new express.Router()

router.get('/page1', (req, res) => {
    res.send('I am page 1')
})

module.exports = router