const mongoose = require("mongoose");

const DramaSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    imageurl: { type: String, required: true },
    daytime: { type: String, required: true },
    channel: { type: String, required: true },
    review: { type: String, required: true },
    favorite:{type:Number,  default:0}
    // favorite: [{
    //   type: String,
    // }]
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("Drama", DramaSchema);
