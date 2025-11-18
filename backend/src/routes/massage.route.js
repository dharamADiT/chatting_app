import express from "express";

const router = express.Router()

router.get("/massage",(req,res)=>{

res.send("massage route called succesfully")
})

export default router;