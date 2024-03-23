const express = require('express')
const app = express()

app.set("view engine", "ejs")
app.use(express.static("./public"))

app.get('/task', function (req, res) {
  res.render('task')
})
app.listen(3000)