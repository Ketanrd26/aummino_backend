import {adminData} from "../controller/LoginController.js";
import express from "express";
import {Login} from "../controller/LoginController.js"

const loginRouter = express.Router();

loginRouter.post("/userCredeintial", adminData);
loginRouter.post("/login", Login);

export default loginRouter

