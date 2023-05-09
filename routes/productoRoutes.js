import express from 'express'
import { getProducts } from '../controllers/productosController.js'


const router = express.Router()

// Get productos

router.post("/get-products", getProducts)
router.get("/get-connection", (req, res) => {

    const whitelist = JSON.parse(process.env.WHITELIST_URL);
    if(req.headers.origin){
        const or = JSON.stringify({origin})
        console.log(or)
    }

    let nameIncluded = whitelist.map(i => i.includes(req.headers.host))

    if(nameIncluded.includes(true)){
        return res.json({ data: "Connected!"})   
    }
    return res.json({ data: "Not included"})
})

export default router