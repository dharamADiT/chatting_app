import dotenv from "dotenv"
import express from "express"
import path from "path"
import authRoute from "./routes/auth.route.js"
import massageRoute from "./routes/massage.route.js"
dotenv.config()



const app = express()
const __dirname = path.resolve()
const PORT = process.env.PORT || 3000

app.use("/api/auth",authRoute)
app.use("/api/messages",massageRoute)

//makiing ready for deployment..
if(process.env.NODE_ENV==="production"){
    app.use(express.static(path.join(__dirname,"../frontend/dist")))

    app.get("*",(_,res)=>{
        res.sendFile(path.join(__dirname,"../frontend", "dist","index.html"))
    })
}




 app.listen(PORT, () => {
    console.log(`server is running on ${PORT}.`)
})

 
