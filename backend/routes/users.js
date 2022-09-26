import express from "express";
import { deleteUser, getAllUser, getUser, updateUser } from "../controllers/user.js";
import { verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();


router.get("/checkauthentication", verifyToken, (req, res, next) => {
    res.send("Hello User! You are logged in!")
})

router.get("/checkuser/:id", verifyUser, (req, res, next) => {
    res.send("Hello User! You are logged in you can delete your account")
})

//UPDATE
router.put("/:id", updateUser)
//DELETE
router.delete("/:id", deleteUser)
//GET
router.get("/:id", getUser)
//GET ALL
router.get("/", getAllUser)

export default router