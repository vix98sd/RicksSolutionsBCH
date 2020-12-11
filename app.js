const express = require('express')
const exphbs = require('express-handlebars')

const mysql = require('./middleware/database')
const pool = mysql.getPool()
// pool.getConnection((error, connection) => {
//     if (error) throw error 
//     const sql = 'INSERT INTO dummytable (numbers) VALUES(1)'
//     if (error) throw error
//     connection.query(sql, (error, result) => {
//         if (error) throw error
//         console.log(result)
//     })
// })

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
const page1Router = require('./routers/page1')
const page2Router = require('./routers/page2')
const page3Router = require('./routers/page3')
const page4Router = require('./routers/page4')
const page5Router = require('./routers/page5')

// usage of routers
app.use(indexRouter)
app.use(page1Router)
app.use(page2Router)
app.use(page3Router)
app.use(page4Router)
app.use(page5Router)

// server run
app.listen(port, () => {
    process.stdout.write("\u001b[2J\u001b[0;0H");
    const currentdate = new Date();
    const datetime = 
    `Started: ${(currentdate.getDay() + 1)}/${(currentdate.getMonth() + 1)}/${currentdate.getFullYear()} @ ${currentdate.getHours()}:${currentdate.getMinutes()}:${currentdate.getSeconds()}`
    console.log(datetime)
    console.log('Server running on port ' + port)
})