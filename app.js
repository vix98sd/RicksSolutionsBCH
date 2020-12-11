const express = require('express')
const exphbs = require('express-handlebars')

//const mysql = require('./middleware/database')

const app = express()
const port = process.env.PORT || 3000

app.listen(port, () => {
    process.stdout.write("\u001b[2J\u001b[0;0H");
    const currentdate = new Date();
    const datetime = 
    `Started: ${(currentdate.getDay() + 1)}/${(currentdate.getMonth() + 1)}/${currentdate.getFullYear()} @ ${currentdate.getHours()}:${currentdate.getMinutes()}:${currentdate.getSeconds()}`
    console.log(datetime)
    console.log('Server running on port ' + port)
})