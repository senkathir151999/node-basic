const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, require: [true, "please provide name"] },
    description: { type: String, require: [true, "please provide name"] },
    price: { type: String, require: [true, "please provide price"] },
    image: { type: String, require: [true, "please provide image"] },
  },
  { timestamps: true }
);
module.exports = mongoose.model("product", productSchema);
