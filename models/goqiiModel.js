const { default: mongoose } = require("mongoose");

const goqiiSchema = mongoose.Schema({
  img: { type: String, required: true },
  title: { type: String, required: true },
  storage: { type: String, required: true },
  price: { type: Number, required: true },
});

const goqiiModel = mongoose.model("goqii-products", goqiiSchema);

module.exports = goqiiModel;
