import express from "express"
import productsRoutes from "./Routes/products.js"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors())

app.use("/", productsRoutes)

app.listen(8800)