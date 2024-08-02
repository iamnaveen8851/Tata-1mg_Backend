const express = require("express");
const goqiiModel = require("../models/goqiiModel");



const goqiiRouter = express.Router();

goqiiRouter.get("/", async (req, res) => {
  try {
    const data = await goqiiModel.find();

    res
      .status(200)
      .json({ message: "GOQii's Products found successfully", data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

goqiiRouter.post("/create", async (req, res) => {
  try {
    const data = await goqiiModel.create(req.body);

    res
      .status(200)
      .json({ message: "GOQii's Products created  successfully", data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = goqiiRouter;
