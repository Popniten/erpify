import express from 'express'
import router from './route'

const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.set('views', './template')

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(8000, () => {
  console.log('Server running on http://localhost:8000/')
})

// Load application routes.
app.use('/', router)

// // Custom 404 page.
// app.use((req, res) => {
//   res.type('text/html')
//   res.status(404)
//   res.render('errors/404', {layout: 'error'})
// })

// // Custom 500 page.
// app.use((err, req, res, next) => {
//   //console.error(err.stack)
//   res.type('text/html')
//   res.status(500)
//   res.render('errors/500', {layout: 'error'})
//   next()
// })
