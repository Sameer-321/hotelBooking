import express from "express"
import Hotel from "../models/Hotel.js"
const router = express.Router()

router.get("/register",(req,res)=>{
    res.send("this is auth register endpoints")
})


export default router