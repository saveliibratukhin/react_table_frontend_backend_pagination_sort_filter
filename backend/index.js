const express = require('express')
const cors = require('cors')
const db = require('./db')
const app = express()
const port = 5000


//to avoid cors error 
app.use(cors())

app.get('/getdata', async (req, res) => {
  const result = await db.query('select * from goods')
  return res.status(200).json(result.rows)
})

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})