const express = require("express");
const avpModel = require("../models/avpModel");

const avpRouter = express.Router();

avpRouter.get("/", async (req, res) => {
  try {
    const data = await avpModel.find();

    res
      .status(200)
      .json({ message: "kapiva's Products found successfully", data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

avpRouter.post("/create", async (req, res) => {
  try {
    const data = await avpModel.create(req.body);

    res
      .status(200)
      .json({ message: "kapiva's Products created  successfully", data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = avpRouter;
