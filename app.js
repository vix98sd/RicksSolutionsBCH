const express = require('express')
const exphbs = require('express-handlebars')

// database pool
const mysql = require('./middleware/database')

// app init
const app = express()
const port = process.env.PORT || 3000

// setting hbs up
app.engine('hbs', exphbs({ extname: 'hbs', defaultLayout: 'main' }))
app.set('view engine', 'hbs')

// static folder for assets
app.use('/', express.static(__dirname + '/src'))

// routers
const indexRouter = require('./routers/index')
const eventsRouter = require('./routers/events')
const dbRouter = require('./routers/db')

// usage of routers
app.use(indexRouter)
app.use(eventsRouter)
app.use(dbRouter)

// server run
app.listen(port, () => {
    process.stdout.write("\u001b[2J\u001b[0;0H");
    const currentdate = new Date();
    const datetime =
        `Started: ${(currentdate.getDay() + 1)}/${(currentdate.getMonth() + 1)}/${currentdate.getFullYear()} @ ${currentdate.getHours()}:${currentdate.getMinutes()}:${currentdate.getSeconds()}`
    console.log(datetime)

    console.log(`Server running on port ${port}`)

    const database = mysql.getPool().config.connectionConfig.database
    console.log(`MySql connected { Database: ${database} }`)
})