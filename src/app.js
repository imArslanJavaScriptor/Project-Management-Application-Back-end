import express from "express"
import cors from "cors"

const app = express()

// This is an exmaple of Middleware
// here we are allwoing our app to recive or send json data
app.use(express.json({limit: "16kb"}))

app.use(express.urlencoded({ extended: true }))

// CORS Cofiguration
// IMP: Make sure to handle cors in the backend
app.use(cors({
    origin: process.env.CORS_ORIGIN?.split(",") || "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
}))

// For serving static files
app.use(express.static("public"))

app.get("/", (req, res) => {
    res.send("Welcome to basecampy")
})

export default app