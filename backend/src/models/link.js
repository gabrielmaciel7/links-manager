const mongoose = require("mongoose");

const LinkSchema = new mongoose.Schema({
  label: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  image_url: {
    type: String,
    required: true,
  },
  is_social: {
    type: Boolean,
    required: true,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

mongoose.model("Link", LinkSchema);