import express from "express";
import multer from "multer";
import path from "path";
import fs from "fs";
import Payment from "../models/payment.model.js";
import ExcelJS from "exceljs";

const router = express.Router();

// Ensure uploads folder exists
const uploadDir = path.join(process.cwd(), "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

// Excel columns
const getExcelColumns = () => [
  { header: "Name", key: "name", width: 20 },
  { header: "Book Code", key: "book_code", width: 15 },
  { header: "Mobile", key: "mobile", width: 15 },
  { header: "Village", key: "village", width: 20 },
  { header: "District", key: "district", width: 20 },
  { header: "Pincode", key: "pincode", width: 10 },
  { header: "State", key: "state", width: 15 },
  { header: "UTR", key: "utr", width: 20 },
  { header: "Amount", key: "amount", width: 10 },
  { header: "UPI ID", key: "upiId", width: 25 },
  { header: "Screenshot", key: "screenshot", width: 30 },
  { header: "Created At", key: "createdAt", width: 20 },
];

// Save a single payment to a unique Excel file
const savePaymentAsNewExcel = async (paymentData) => {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet("Payment");
  worksheet.columns = getExcelColumns();
  worksheet.addRow(paymentData);

  // Find next order number
  const existingFiles = fs.readdirSync(uploadDir).filter(file => file.startsWith("order") && file.endsWith(".xlsx"));
  const nextOrderNumber = existingFiles.length + 1;

  const filePath = path.join(uploadDir, `order${nextOrderNumber}.xlsx`);
  await workbook.xlsx.writeFile(filePath);
};

// POST /api/payment
router.post("/", upload.single("screenshot"), async (req, res) => {
  try {
    const { name, book_code, mobile, village, district, pincode, state, utr, amount, upiId } = req.body;
    const screenshot = req.file ? req.file.filename : null;

    // Validation
    if (!name || !book_code || !mobile || !village || !district || !pincode || !state || !utr || !amount || !upiId || !screenshot) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Save to MongoDB
    const newPayment = new Payment({
      name,
      book_code,
      mobile,
      village,
      district,
      pincode,
      state,
      utr,
      amount,
      upiId,
      screenshot,
    });

    await newPayment.save();

    // Save to unique Excel file
    await savePaymentAsNewExcel({
      name,
      book_code,
      mobile,
      village,
      district,
      pincode,
      state,
      utr,
      amount,
      upiId,
      screenshot,
      createdAt: new Date().toLocaleString(),
    });

    res.status(201).json({ message: "Payment submitted successfully" });
  } catch (error) {
    console.error("Payment submission error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
