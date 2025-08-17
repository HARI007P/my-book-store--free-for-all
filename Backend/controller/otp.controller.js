// Backend/controller/otp.controller.js
import User from "../models/user.model.js";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

// Setup Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Generate 6 digit OTP
const generateOTP = () => Math.floor(100000 + Math.random() * 900000).toString();

// ✅ Send OTP Controller
export const sendOTP = async (req, res) => {
  const { email, fullname } = req.body;

  if (!email || !fullname) {
    return res.status(400).json({ success: false, message: "Email & fullname required" });
  }

  const otp = generateOTP();
  const otpExpiresAt = new Date(Date.now() + 5 * 60 * 1000); // 5 minutes

  try {
    await User.findOneAndUpdate(
      { email },
      { fullname, otp, otpExpiresAt, verified: false },
      { upsert: true, new: true }
    );

    await transporter.sendMail({
      from: `"Bookstore OTP" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Your OTP Code",
      html: `<h3>Hello ${fullname}</h3><p>Your OTP is: <b>${otp}</b></p><p>Expires in 5 minutes.</p><br><p>Thank you for using HariBookStore!</p> <br><p>Any queries, feel free to reach out!<br>email: coustmer.haribookstore@gmail.com</p>`,
    });

    res.status(200).json({ success: true, message: "OTP sent successfully" });
  } catch (err) {
    console.error("Send OTP Error:", err);
    res.status(500).json({ success: false, message: "Failed to send OTP" });
  }
};

// ✅ Verify OTP Controller
export const verifyOTP = async (req, res) => {
  const { email, otp, fullname, password } = req.body;

  if (!email || !otp) {
    return res.status(400).json({ success: false, message: "Email & OTP required" });
  }

  try {
    const user = await User.findOne({ email });

    if (!user || user.otp !== otp) {
      return res.status(400).json({ success: false, message: "Invalid OTP" });
    }

    if (user.otpExpiresAt < Date.now()) {
      return res.status(400).json({ success: false, message: "OTP expired" });
    }

    // ✅ Mark user as verified & update password
    user.verified = true;
    user.fullname = fullname || user.fullname;
    user.password = password || user.password;
    user.otp = undefined;
    user.otpExpiresAt = undefined;

    await user.save();

    res.status(200).json({
      success: true,
      message: "OTP verified & user registered",
      user: { id: user._id, email: user.email, fullname: user.fullname },
    });
  } catch (err) {
    console.error("Verify OTP Error:", err);
    res.status(500).json({ success: false, message: "Verification failed" });
  }
};
