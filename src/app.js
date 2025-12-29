import express from "express";
import cors from "cors"

const app = express();

// Basic Configurations
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({ extended: true, limit: "32kb" }))
app.use(express.static("public"))

// CORS Configurations
// Note: Keep in Mind CORS is something that can be handled by backend developer
app.use(cors({
    origin: process.env.CORS_ORIGIN?.split(",") || "https://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
}))

// Importing Routes
import healthCheckRouter from "./routes/healthCheck.route.js"

app.use("/api/v1/healthcheck", healthCheckRouter)
 
app.get("/", (req, res) => {
    res.send("Welcome To Basecampy")
})

app.get("/info", (req, res) => {
    res.send("This is an Information Route")
})

export default app 