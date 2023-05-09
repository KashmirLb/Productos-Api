import express from 'express'
import { getProducts } from '../controllers/productosController.js'
import checkToken from '../middleware/checkToken.js'


const router = express.Router()

// Get productos

router.post("/get-products", checkToken, getProducts)
router.get("/get-connection", checkToken, async (req, res) => {
    return res.json({ data: "Reached data!"})
})

export default router