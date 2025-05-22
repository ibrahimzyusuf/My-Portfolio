import express from "express";
import dotenv from 'dotenv'
import connectToBD from "./Config/connectToDB.js";
import cors from "cors";
import projectRoutes from "./Routes/projectRoutes.js";
import informationRoutes from "./Routes/informationRoutes.js";

dotenv.config()

// Init app
const app=express()

// Connection to DB
connectToBD()

// Middlewares
app.use(express.json())

// Cors
app.use(cors({origin:process.env.CLIENT_DOMAIN}))

// Routes
app.use('/api/projects',projectRoutes)
app.use('/api/informations',informationRoutes)

// Running the server
app.listen(process.env.PORT,() => console.log(`Server is running on port ${process.env.PORT}`))