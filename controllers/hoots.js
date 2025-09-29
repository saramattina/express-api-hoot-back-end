// controllers/hoots.js

import Hoot from "../models/hoot.js";

// add routes here
// controllers/hoots.js

// controllers/hoots.js

export const createHoot = async (req, res) => {
  try {
    req.body.author = req.user._id;
    const hoot = await Hoot.create(req.body);
    // hoot._doc.author = req.user;
    res.status(201).json(hoot);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};
