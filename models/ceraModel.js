const { default: mongoose } = require("mongoose");

const ceraSchema = mongoose.Schema({
  img: { type: String, required: true },
  title: { type: String, required: true },
  storage: { type: String, required: true },
  rating: { type: Number, required: true },
  price: { type: Number, required: true },
});

const ceraModel = mongoose.model("cera-products", ceraSchema);

module.exports = ceraModel;
