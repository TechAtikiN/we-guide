import express from "express";
import {  login, register, forgotPassword, resetPassword, user } from "../controllers/auth.js";
import authenticate from "../middleware/authenticate.js";
const router = express.Router();


router.route ("/register").post(register)

router.route ("/login").post(login)

router.route ("/user").get(authenticate, user)

router.route ("/forgotpassword").post(forgotPassword)

router.route ("/resetpassword/:resetToken").post(resetPassword)


export default router

