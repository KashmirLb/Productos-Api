import express from 'express'
import dotenv from 'dotenv'
import productoRoutes from './routes/productoRoutes.js'
import cors from 'cors'

const app = express()
dotenv.config()
app.use(express.json())

const whitelist = [
    process.env.WHITELIST_URL,
]

console.log(whitelist)

const corsOptions = {
    origin: function(origin, callback){
        if(whitelist.includes(origin)){
            callback(null,true)
        }
        else{
            callback(new Error("CORS error"))
        }
    }
}
app.use(cors(corsOptions))

// Routing
app.use("/api/productos", productoRoutes)

const PORT = process.env.PORT || 4000

app.listen(PORT, ()=> console.log("Server connected on",PORT))