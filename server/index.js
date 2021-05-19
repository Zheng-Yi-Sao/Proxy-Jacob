const express = require('express')
const app = express()
const port = 9000
const path = require('path')
const cors = require('cors')

app.use(cors())

app.use(express.static(path.join(__dirname, "..", "public")))

app.listen(port, ()=>{
  console.log(`Server now listening at http://localhost:${port}`)
})