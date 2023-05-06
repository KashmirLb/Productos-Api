import express from 'express'
import { createUser, getProducts, getStore } from '../controllers/userController.js'


const router = express.Router()

// Create user

router.post("/create-user", createUser)
router.post("/get-products", getProducts)
router.get("/get-user", getStore)

export default router