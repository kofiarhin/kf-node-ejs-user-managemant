require("dotenv").config()
const express = require("express")
const app = express()
const connect = require("./config/db")
const userRouter = require("./routes/userRoutes")
const expressLayout = require("express-ejs-layouts")



const port = process.env.PORT || 5000
// middleware
app.set("layout", "./layout/main")
app.use(expressLayout)
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))
app.set("view engine", "ejs")

// connect database
connect()


app.use(userRouter)
app.listen(port, () => console.log(`Listening on ${port}`))