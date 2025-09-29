// controllers/hoots.js
import { Router } from "express";
import Hoot from "../models/hoot.js";

// add routes here
// controllers/hoots.js
// controllers/hoots.js
// GET Index
export const getHoots = async (req, res) => {
  try {
    const hoots = await Hoot.find({})
      .populate("author")
      .sort({ createdAt: "desc" });
    res.status(200).json(hoots);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

export const getHoot = async (req, res) => {
  // fill this out
};

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
