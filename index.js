const dotenv= require("dotenv")
dotenv.config()
const express = require("express")
const Router = require("./Route/DataSend")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/api" ,Router)

app.listen(process.env.PORT, () => {
    console.log(`Server Is running at ${process.env.PORT} port`)
})