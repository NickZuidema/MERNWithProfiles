const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const itemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    default: "No description.",
  },
  category: {
    type: String,
    required: true,
  },
  image: {
    //may be changed to primaryPhoto if commisions are implemented, as they could use several photos.
    type: String,
    required: true, //Was not required
  },
  artist: {
    type: ObjectId,
    ref: "User",
  },
});

mongoose.model("Item", itemSchema);
