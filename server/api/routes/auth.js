import express from "express"
import Hotel from "../models/Hotel.js"
const router = express.Router()

router.get("/",(req,res)=>{
    res.send("this is auth endpoints")
})
router.get("/register",(req,res)=>{
    res.send("this is auth register endpoints")
})
router.post("/",async(req,res)=>{

    const newHotel = new Hotel(req.body)
    try{
        const savedHotels = await newHotel.save()
        //console.log(savedHotels)
        res.status(200).json(savedHotels)
    }
    catch(err){
        res.status(500).json(err)
      
    }
})

export default router