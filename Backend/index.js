import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRoutes from "./route/user.route.js";
import paymentRoutes from "./route/payment.route.js"; // ✅ Import payment routes
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Ensure uploads folder exists
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const uploadsDir = path.join(__dirname, "uploads");

if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

// Serve uploaded screenshots publicly
app.use("/uploads", express.static(uploadsDir));

// Routes
app.use("/user", userRoutes);
app.use("/payment", paymentRoutes); // ✅ Add payment route

// DB Connection
mongoose.connect("mongodb://127.0.0.1:27017/bookstore", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("MongoDB connected");
  app.listen(4000, () =>
    console.log("Server started on http://localhost:4000")
  );
})
.catch((err) => console.log("MongoDB Connection Error:", err));
