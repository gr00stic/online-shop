const express = require('express')
const dbConnect = require('./config/dbConnect')
const errorHandler = require('./middleware/errorHandler')
require('dotenv').config()

dbConnect()
const app = express()
const PORT = process.env.PORT || 5001

app.use(express.json())
app.use('/api/products', require("./routes/productRoutes"))
app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`fine ${PORT}`)
})