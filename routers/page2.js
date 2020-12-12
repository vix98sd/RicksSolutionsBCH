const express = require('express')

const router = new express.Router()

router.get('/page2', (req, res) => {
    res.send('I am page 2')
})

module.exports = router