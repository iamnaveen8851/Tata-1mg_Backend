const express = require("express");
const productModel = require("../models/productModel");

const productRouter = express.Router();

// GET all products with optional sort query
productRouter.get("/", async (req, res) => {
  try {
    const { search, title, price, sort } = req.query;
    let query = {};

    if (search) {
      query.title = { $regex: search, $options: "i" };
    }

    if (title) {
      query.title = { $regex: title, $options: "i" };
    }
    
    let sortOrder = {};
    if (sort === "asc") {
      sortOrder.price = 1;
    } else if (sort === "desc") {
      sortOrder.price = -1;
    }

    const data = await productModel.find(query).sort(sortOrder);

    res.status(200).json({ message: "All Products found successfully", data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST create a new product
productRouter.post("/create", async (req, res) => {
  try {
    const data = await productModel.create(req.body);

    res.status(200).json({ message: "Product created successfully", data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = productRouter;
