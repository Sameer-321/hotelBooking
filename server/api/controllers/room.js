import Rooms from "../models/Rooms.js";
import Hotel from "../models/Hotel.js";

export const createRoom = async (req, res, err) => {
  const hotelId = req.params.hotelid;
  const newRoom = new Rooms(req.body);

  try {
    const savedRoom = await newRoom.save();

    try {
      await Hotel.findByIdAndUpdate(hotelId, {
        $push: { rooms: savedRoom._id },
        //$push: { rooms: savedRoom._id }= its add the value in the array of rooms schema of hotel(mongoose properties)
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json(savedRoom);
  } catch (err) {
    next(err);
    //createError(err)
  }
};

export const updateRoom = async (req, res, next) => {
  try {
    const updatedRooms = await Rooms.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedRooms);
  } catch (err) {
    next(err);
  }
};

export const deleteRoom = async (req, res, next) => {
  const hotelId = req.params.hotelid;

  try {
    await Rooms.findByIdAndDelete(req.params.id);
    try {
      await Hotel.findByIdAndUpdate(hotelId, {
        $pull: { rooms: req.params.id},
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json("Rooms has been delete");
  } catch (err) {
    next(err);
  }
};

export const getAllRoom = async (req, res, next) => {
  try {
    const roomsAll = await Hotel.find();
    res.status(200).json(roomsAll);
  } catch (err) {
    next(err);
  }
};

export const getRoom = async (req, res, next) => {
  try {
    const rooms = await newHotel.findById(req.params.id);
    res.status(200).json(rooms);
  } catch (err) {
    next(err);
  }
};
