const { default: mongoose } = require("mongoose");

const avpSchema = mongoose.Schema({
  img: { type: String, required: true },
  title: { type: String, required: true },
  storage: { type: String, required: true },
  rating: { type: Number, required: true },
  price: { type: Number, required: true },
});

const avpModel = mongoose.model("avp-products", avpSchema);

module.exports = avpModel;
