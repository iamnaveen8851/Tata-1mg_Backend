const express = require("express");
const kapivaModel = require("../models/kapivaModel");

const kapivaRouter = express.Router();

kapivaRouter.get("/", async (req, res) => {
  try {
    const data = await kapivaModel.find();

    res
      .status(200)
      .json({ message: "kapiva's Products found successfully", data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

kapivaRouter.post("/create", async (req, res) => {
  try {
    const data = await kapivaModel.create(req.body);

    res
      .status(200)
      .json({ message: "kapiva's Products created  successfully", data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = kapivaRouter;
