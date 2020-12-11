const express = require('express')

const router = new express.Router()

router.get('/page3', (req, res) => {
    res.send('I am page 3')
})

module.exports = router