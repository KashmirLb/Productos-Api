import express from 'express'
import { getProducts } from '../controllers/productosController.js'


const router = express.Router()

// Get productos

router.post("/get-products", getProducts)
router.get("/get-connection", (req, res) => res.json({ data: "Connected!"}))

export default router