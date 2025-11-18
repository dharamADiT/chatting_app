import express from "express"; 
const router = express.Router();



router.get("/signup",(req,res)=>{
    res.send("user sign up succesfully")
})

router.get("/login",(req,res)=>{
    res.send("user login up succesfully")
})
router.get("/logout",(req,res)=>{
    res.send("user logout up succesfully")
})
export default router;