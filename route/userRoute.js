import express from "express";
import { customersData } from "../controller/user.js";
import {contactData} from "../controller/getUserDataController.js"
const router = express.Router();

router.post("/userContact", customersData);
router.get("/ContactList",contactData )

export default router;
