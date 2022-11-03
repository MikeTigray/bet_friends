const { Schema, model } = require("mongoose");

const betSchema = new Schema({
  title: { type: String, required: true, trim: true },
  description: { type: String },
  points: { type: Number, required: true },
  betDate: { type: Date, default: Date.now },
  betCreatedBy: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

const Bet = model("bet", betSchema);

module.exports = Bet;
