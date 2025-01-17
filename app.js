const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.send('Hello Cloud!')
})

app.listen(PORT, ()=> console.log(`server is running on ... ${PORT}`))