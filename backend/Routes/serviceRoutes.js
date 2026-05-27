import express from "express";
import { addService, getAllServices  } from "../Controller/serviceController.js";
import authMiddleware from "../Middleware/authMiddleware.js";
import upload from "../Middleware/uploadMiddleware.js";

const router = express.Router();

// Add Service
router.post("/add",
    authMiddleware,
    upload.single("image"),
    addService
);


// GET ALL SERVICES
router.get("/", getAllServices);

export default router;