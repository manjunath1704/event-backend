import express from "express";
import { getEvents, createEvent } from "../controllers/eventController.js";

const router = express.Router();

// GET all events
router.get("/", getEvents);

// CREATE event
router.post("/", createEvent);

export default router;