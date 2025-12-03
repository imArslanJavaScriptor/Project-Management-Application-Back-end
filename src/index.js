import dotenv from "dotenv"

dotenv.config({
    path: "./.env"
})

console.log("Username is: ", process.env.username);

console.log("Server is Running...");