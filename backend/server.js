import express from 'express'
import products from './data/products'
import dotenv from 'dotenv.js'
import connectDB from "./config/db.js"
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import { errorHandler, notFound } from "./middleware/errorMiddleware.js"

dotenv.config()

connectDB()

const app = express();

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)

app.use(notFound) 
app.use(errorHandler)

app.get("/", (req, res) => {
    res.send("API is running...")
});



const PORT = process.env.PORT || 5000

app.listen(
    PORT, 
    console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`));