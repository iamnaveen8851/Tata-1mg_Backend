const express = require("express");
const productModel = require("../models/productModel");


const productRouter = express.Router();

productRouter.get("/", async (req, res) => {
  try {
    const data = await productModel.find();

    res
      .status(200)
      .json({ message: "All Products found successfully", data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

productRouter.post("/create", async (req, res) => {
  try {
    const data = await productModel.create(req.body);

    res
      .status(200)
      .json({ message: "All Products created  successfully", data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = productRouter;
