import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  book_code: { type: String, required: true },
  mobile: { type: String, required: true },
  village: { type: String, required: true },
  district: { type: String, required: true },
  pincode: { type: String, required: true },
  state: { type: String, required: true },
  utr: { type: String, required: true },
  amount: { type: Number, required: true },
  upiId: { type: String, required: true },
  screenshot: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Payment", paymentSchema);
