// Modules and Globals
require('dotenv').config()
const express = require('express')
const app = express()

// Express Settings
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))

// Controllers & Routes
app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('*', (req, res) => {
    res.render('error404')
})
app.use(express.urlencoded({ extended: true }))

// Listen for Connections
app.listen(process.env.PORT)


































// require('dotenv').config()
// const express = require('express')
// const app = express()

// // app.set('views', __dirname + '/views')
// app.set('view engine', 'jsx')
// app.engine('jsx', require('express-react-views').createEngine())

// app.use('/places', require('./controllers/places'))


// app.get('/', (req, res) => {
//     res.render('home')
//   })
  

// app.get('*', (req, res) => {
//     res.render('error404')
//   })
  

// app.listen(process.env.PORT, () => {
//     console.log("I AM ALIVE!");
// })

