import express from "express";
import multer from "multer";
import Payment from "../models/payment.model.js";
import path from "path";

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

router.post("/", upload.single("screenshot"), async (req, res) => {
  try {
    const { name, village, district, pincode, state, utr, amount, upiId } = req.body;

    const payment = new Payment({
      name,
      village,
      district,
      pincode,
      state,
      utr,
      amount,
      upiId,
      screenshot: req.file?.filename || "",
    });

    await payment.save();
    res.status(201).json({ message: "Payment submitted", payment });
  } catch (err) {
    console.error("Payment Error:", err.message);
    res.status(500).json({ message: "Failed to submit payment" });
  }
});

export default router;
