import express from "express";
import Hotel from "../models/Hotel.js";

const router = express.Router();

//create
router.post("/", async (req, res) => {
  const newHotel = new Hotel(req.body);
  try {
    const savedHotels = await newHotel.save();
    res.status(200).json(savedHotels);
  } catch (err) {
    res.status(500).json(err);
  }
});
//update
router.put("/:id", async (req, res) => {
  //const newHotel = new Hotel(req.body) //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!can be remove also
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedHotel);
  } catch (err) {
    res.status(500).json(err);
  }
});
//delete
router.delete("/:id", async (req, res) => {
  //const newHotel = new Hotel(req.body) //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!can be remove also
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json("hotel has been delete");
  } catch (err) {
    res.status(500).json(err);
  }
});
//get
router.get("/:id", async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (err) {
    res.status(500).json(err);
  }
});
//get all
router.get("/", async (req, res,next) => {

  try {
    const hotelAll = await Hotel.find();
    res.status(200).json(hotelAll);
  } catch (err) {
    next(err)
  }
});
export default router;
