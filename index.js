const express = require('express')
const app = express()
const port = 8081

app.use(express.static('test'))
app.listen(port)
