export const getEvents = (req, res) => {
    res.json({
      message: "All events fetched successfully 🎉",
      data: []
    });
  };
  
  export const createEvent = (req, res) => {
    const event = req.body;
  
    res.json({
      message: "Event created successfully ✅",
      data: event
    });
  };