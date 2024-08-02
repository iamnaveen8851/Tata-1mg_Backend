const { default: mongoose } = require("mongoose");

const himalayanSchema = mongoose.Schema({
  img: { type: String, required: true },
  title: { type: String, required: true },
  storage: { type: String, required: true },
  rating: { type: Number, required: true },
  price: { type: Number, required: true },
});

const himalayanModel = mongoose.model("himalayan-products", himalayanSchema);

module.exports = himalayanModel;
