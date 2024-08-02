const express = require("express");
const himalayanModel = require("../models/himalayanModel");

const himalayanRouter = express.Router();

himalayanRouter.get("/", async (req, res) => {
  try {
    const data = await himalayanModel.find();

    res
      .status(200)
      .json({ message: "Himalayan's Products found successfully", data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

himalayanRouter.post("/create", async (req, res) => {
  try {
    const data = await himalayanModel.create(req.body);

    res
      .status(200)
      .json({ message: "Himalayan's Products created  successfully", data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = himalayanRouter;
