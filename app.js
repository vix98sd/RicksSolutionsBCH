const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')

// const mysql = require('./middleware/database')

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.engine('hbs', exphbs({ extname: 'hbs', defaultLayout: 'main' }))
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
    res.render('index', {data: req.query})
})

app.listen(port, () => {
    process.stdout.write("\u001b[2J\u001b[0;0H");
    const currentdate = new Date();
    const datetime = 
    `Started: ${(currentdate.getDay() + 1)}/${(currentdate.getMonth() + 1)}/${currentdate.getFullYear()} @ ${currentdate.getHours()}:${currentdate.getMinutes()}:${currentdate.getSeconds()}`
    console.log(datetime)
    console.log('Server running on port ' + port)
})