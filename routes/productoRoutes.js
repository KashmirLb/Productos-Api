import express from 'express'
import { getProducts } from '../controllers/productosController.js'


const router = express.Router()

// Get productos

router.post("/get-products", getProducts)


export default router