import express from "express";
import {
  updateUser,
  deleteUser,
  getAllUser,
  getUser,
} from "../controllers/user";

import { verifyAdmin, verifyToken,verifyUser } from "../utils/verifyToken";
const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//   res.send("hello user, you are logged in");
// })

// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//   res.send("hello user, you are logged in ");
// })

// router.get("/checkAdmin/:id", verifyAdmin, (req, res, next) => {
//     res.send("hello admin, you are logged in ");
//   })

//update
router.put("/:id",verifyUser, updateUser);
//delete
router.delete("/:id", verifyUser,deleteUser);
//get
router.get("/:id", verifyUser,getUser);
//get all
router.get("/",verifyAdmin, getAllUser);

export default router;
