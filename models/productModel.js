const { default: mongoose } = require("mongoose");

const productSchema = mongoose.Schema({
  img: { type: String, required: true },
  title: { type: String, required: true },
  storage: { type: String, required: true },
  rating: { type: Number, required: true },
  price: { type: Number, required: true },
});

const productModel = mongoose.model("products", productSchema);

module.exports = productModel;
