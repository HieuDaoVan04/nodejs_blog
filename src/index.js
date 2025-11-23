  const path = require('path')
  const express = require('express')
  const morgan = require('morgan')
  const { engine } = require('express-handlebars')

  const app = express()

  //static files
  app.use(express.static(path.join(__dirname, 'public')))

  //HTTP Logger
  app.use(morgan('combined'))

  //template engine
  app.engine('hbs', engine({
    extname: '.hbs',
  }))
  app.set('view engine', 'hbs')
  app.set('view engine', 'hbs')
  app.engine('hbs', engine({
    extname: '.hbs',
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'resource', 'views', 'layouts'),
    partialsDir: path.join(__dirname, 'resource', 'views', 'partials'),
  }))
  app.set('views', path.join(__dirname, 'resource', 'views'))

  
  app.get('/', (req, res) => {
      res.render('home')
  })

  app.get('/news', (req, res) => {
      res.render('news')
  })
  const port = 3000

  // app.get('/', (req, res) => {
  //   res.render('Hello World!')
  // })

  app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
  })
