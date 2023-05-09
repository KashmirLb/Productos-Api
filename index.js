import express from 'express'
import dotenv from 'dotenv'
import productoRoutes from './routes/productoRoutes.js'
import cors from 'cors'

const app = express()
dotenv.config()
app.use(express.json())

const whitelist = JSON.parse(process.env.WHITELIST_URL);

const corsOptions = {
    origin: function(origin, callback){
        console.log(origin)
        let nameIncluded = whitelist.map(i => i.includes(origin))
        if(nameIncluded.includes(true)){
            callback(null,true)
        }
        else{
            callback({error: new Error("CORS error"), origin: origin})
        }
    }
}
app.use(cors(corsOptions))

// Routing
app.use("/api/productos", productoRoutes)

const PORT = process.env.PORT || 4000

app.listen(PORT, ()=> console.log("Server connected on",PORT))