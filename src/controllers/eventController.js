import Event from "../models/Event.js";

// GET events
export const getEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// CREATE event
export const createEvent = async (req, res) => {
  try {
    const { name, date } = req.body;

    // ✅ Validation
    if (!name || !date) {
      return res.status(400).json({
        message: "Name and date are required",
      });
    }

    const event = await Event.create({ name, date });

    // res.status(201).json(event);
    res.status(201).json({
      success: true,
      message: "Event created successfully",
      data: event,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
