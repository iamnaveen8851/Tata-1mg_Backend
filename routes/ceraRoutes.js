const express = require("express");
const ceraModel = require("../models/ceraModel");

const ceraRouter = express.Router();

ceraRouter.get("/", async (req, res) => {
  try {
    const data = await ceraModel.find();

    res
      .status(200)
      .json({ message: "Cera's Products found successfully", data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

ceraRouter.post("/create", async (req, res) => {
  try {
    const data = await ceraModel.create(req.body);

    res
      .status(200)
      .json({ message: "Cera's Products created  successfully", data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = ceraRouter;
