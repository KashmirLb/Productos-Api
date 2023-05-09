import express from 'express'
import { getProducts } from '../controllers/productosController.js'
import util from 'util'

const router = express.Router()

// Get productos

router.post("/get-products", getProducts)
router.get("/get-connection", (req, res) => {

    const whitelist = JSON.parse(process.env.WHITELIST_URL);

        console.log('my boject')
    

    let nameIncluded = whitelist.map(i => i.includes(req.headers.host))

    if(nameIncluded.includes(true)){
        return res.json({ data: "Connected!"})   
    }
    return res.json({ data: "Not included"})
})

export default router