import express from "express"
import dotenv from "dotenv"

dotenv.config({
    path: "./.env"
})

const app = express()
const port = process.env.PORT || 8000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/arslan", (req, res) => {
    res.send("Hello Arslan")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
