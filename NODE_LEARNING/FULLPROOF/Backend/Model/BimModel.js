const { Schema, model } = require("mongoose");

const bmiSchema = new Schema(
  {
    height: { type: Number, required: true },
    weight: { type: Number, required: true },
    bmi: { type: Number, required: true },
    user_id: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const bmiModel = model("bmi", bmiSchema);

module.exports = { bmiModel };
