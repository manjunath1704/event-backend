// export const getEvents = (req, res) => {
//     res.json({
//       message: "All events fetched successfully 🎉",
//       data: []
//     });
//   };
  
//   export const createEvent = (req, res) => {
//     const event = req.body;
  
//     res.json({
//       message: "Event created successfully ✅",
//       data: event
//     });
//   };
import Event from "../models/Event.js";

// GET events
export const getEvents = async (req, res) => {
  const events = await Event.find();
  res.json(events);
};

// CREATE event
export const createEvent = async (req, res) => {
  const event = await Event.create(req.body);
  res.json(event);
};