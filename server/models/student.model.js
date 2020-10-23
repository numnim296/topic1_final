const mongoose = require('mongoose');


const StudentSchema = new mongoose.Schema(
  {
    sid:       { type: String, required: true },
    first:     { type: String, required: true },
    last:      { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
  },
  {
    versionKey: false
  }
);


module.exports = mongoose.model('Student', StudentSchema);