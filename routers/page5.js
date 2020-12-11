const express = require('express')

const router = new express.Router()

router.get('/page5', (req, res) => {
    res.send('I am page 5')
})

module.exports = router