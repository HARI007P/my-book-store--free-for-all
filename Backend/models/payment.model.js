import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
  name: String,
  village: String,
  district: String,
  pincode: String,
  state: String,
  utr: String,
  upiId: String,
  amount: Number,
  screenshot: String,
  date: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Payment", paymentSchema);
