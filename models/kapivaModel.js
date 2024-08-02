const { default: mongoose } = require("mongoose");

const kapivaSchema = mongoose.Schema({
  img: { type: String, required: true },
  title: { type: String, required: true },
  storage: { type: String, required: true },
  rating: { type: Number, required: true },
  price: { type: Number, required: true },
});

const kapivaModel = mongoose.model("kapiva-products", kapivaSchema);

module.exports = kapivaModel;
