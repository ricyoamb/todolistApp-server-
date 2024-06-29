const express = require('express')
const routes = require('./routes')
const app = express()

const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('test')
})

app.use(routes)

app.listen(PORT, console.log(`Server started on port ${PORT}`))
