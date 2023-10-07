const { model, Schema } = require("mongoose");

const wordsSchema = new Schema(
  {
    studentKey: {
      type: Number,
      unique: true,
    },
    age: Array,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("Words", wordsSchema);
