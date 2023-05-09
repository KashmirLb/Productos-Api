import express from 'express'
import dotenv from 'dotenv'
import productoRoutes from './routes/productoRoutes.js'
import cors from 'cors'

const app = express()
dotenv.config()
app.use(express.json())

app.use(cors())

// Routing
app.use("/api/productos", productoRoutes)

const PORT = process.env.PORT || 4000

app.listen(PORT, ()=> console.log("Server connected on",PORT))