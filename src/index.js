import dotenv from "dotenv"
import app from "./app.js"
import connectDB from "./db/index.js"


dotenv.config({
    path: "./.env"
})

const port = process.env.PORT || 3000


connectDB()
.then(() => {
  app.listen(port, () => {
    console.log(`Example app is listening on Port:${port}`)
  })
})
.catch((err) => {
  console.error("MongoDB Connection Err", err)
  process.exit(1)
} )

