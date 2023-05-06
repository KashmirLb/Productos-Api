import functions from 'firebase-functions'
import express from 'express'
import dotenv from 'dotenv'
import userRoutes from './routes/userRoutes.js'
import cors from 'cors'

const firstApp = express()

dotenv.config()

firstApp.use(express.json())


const whitelist = [
    process.env.FRONTEND_URL,
]

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

firstApp.use(cors())

// Routing

firstApp.use("/api/users", userRoutes)

firstApp.get("/test", (req, res) =>{
    res.send("It works!")
})


const PORT = process.env.PORT || 4000


// firstApp.listen(PORT, ()=> console.log("Server connected on",PORT))

const app = functions.https.onRequest(firstApp)

export default app