import dotenv from "dotenv"
import express from "express"
import path from "path"
import authRoute from "./routes/auth.route.js"
import massageRoute from "./routes/massage.route.js"
dotenv.config()



const app = express()
const __dirname = path.resolve()
const PORT = process.env.PORT || 3000


//makiing ready for deployment..


app.use("/api/auth",authRoute)
app.use("/api/auth",massageRoute)


const server = app.listen(PORT, () => {
    console.log(`server is running on ${PORT}.`)
})

 
