const express = require('express')

const router = new express.Router()

router.get('/', (req, res) => {
    res.send('I am index page')
})

module.exports = router