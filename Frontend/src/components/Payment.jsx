import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import qrImage from "../assets/upi.jpeg";
import toast from "react-hot-toast";
import axios from "axios";
import Navbar from "./Navbar";

function Payment() {
  const navigate = useNavigate();
  const [bookname, setBook] = useState("");
  const [utr, setUtr] = useState("");
  const [screenshot, setScreenshot] = useState(null);
  const [name, setName] = useState("");
  const [village, setVillage] = useState("");
  const [district, setDistrict] = useState("");
  const [pincode, setPincode] = useState("");
  const [state, setState] = useState("");
  const [timeLeft, setTimeLeft] = useState(360); // 6 minutes = 360 seconds

  // Text-to-speech announcements
  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  };

  // Timer countdown
  useEffect(() => {
    if (timeLeft <= 0) {
      toast.error("⏱ Payment session expired");
      navigate("/");
      return;
    }

    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    // Voice reminder every minute
    if ([300, 240, 180, 120, 60].includes(timeLeft)) {
      const min = timeLeft / 60;
      speak(`${min} minutes left to complete the payment`);
    }

    // 30-second final warning
    if (timeLeft === 30) {
      toast("⚠️ Hurry up! Only 30 seconds left.");
      speak("Hurry up! Only 30 seconds remaining");
    }

    return () => clearInterval(interval);
  }, [timeLeft, navigate]);

  const handleFileChange = (e) => {
    setScreenshot(e.target.files[0]);
  };

  const handlePaymentSubmit = async () => {
    if (
      !utr.trim() || !name || !village || !district ||
      !pincode || !state || !screenshot
    ) {
      toast.error("Please fill all fields and upload screenshot");
      return;
    }

    if (!/^\d{12}$/.test(utr.trim())) {
      toast.error("UTR must be exactly 12 digits");
      return;
    }

    const formData = new FormData();
    formData.append("utr", utr);
    formData.append("name", name);
    formData.append("village", village);
    formData.append("district", district);
    formData.append("pincode", pincode);
    formData.append("state", state);
    formData.append("amount", 73);
    formData.append("upiId", "7416219267@ybl");
    formData.append("screenshot", screenshot);

    try {
      await axios.post("http://localhost:4000/payment", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      toast.success("Payment submitted successfully!");
      setTimeout(() => navigate("/"), 2000);
    } catch (error) {
      toast.error("Error submitting payment");
      console.error("Payment Error:", error.message);
    }
  };

  const formatTime = (seconds) => {
    const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    return `${mins}:${secs}`;
  };

  return (
    <div className="flex flex-col items-center justify-center p-20 bg-gray-900">
      <Navbar />
      <h2 className="text-4xl font-bold text-white mb-2">
        UPI <span className="text-pink-500">Payment</span>
      </h2>
      <p className="text-xl mb-2">
        <strong>UPI ID:</strong> 7416219267@ybl
      </p>
      <img src={qrImage} alt="Scan to Pay" className="w-72 h-64 mb-4" />

      {/* Countdown Timer */}
      <div className="text-xl font-semibold text-red-600 mb-4">
        Time left: {formatTime(timeLeft)}
      </div>

      <p className="text-lg mb-5 text-center">
        <b>Total: ₹43</b><br />
        After payment, fill in your details and upload your screenshot:
        <span className="text-red-600">*</span>
      </p>

      <h2 className="text-2xl font-semibold mb-4">Personal Details</h2>
      <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} className="w-80 px-4 py-2 border mb-3" />
      <input type="text" placeholder="Village" value={village} onChange={(e) => setVillage(e.target.value)} className="w-80 px-4 py-2 border mb-3" />
      <input type="text" placeholder="District" value={district} onChange={(e) => setDistrict(e.target.value)} className="w-80 px-4 py-2 border mb-3" />
      <input type="text" placeholder="Pincode" value={pincode} onChange={(e) => setPincode(e.target.value)} className="w-80 px-4 py-2 border mb-3" />
      <select value={state} onChange={(e) => setState(e.target.value)} className="w-80 px-4 py-2 border mb-3">
        <option value="">Select State</option>
        <option value="Andhra Pradesh">Andhra Pradesh</option>
        <option value="Telangana">Telangana</option>
        <option value="Odisha">Odisha</option>
      </select>
      <input type="text" placeholder="UTR (12 digits)" value={utr} onChange={(e) => setUtr(e.target.value)} className="w-80 px-4 py-2 border mb-3" />
      <input type="file" accept="image/*" onChange={handleFileChange} className="w-80 mb-4" />

      <button onClick={handlePaymentSubmit} className="bg-pink-600 text-white px-6 py-3 rounded hover:bg-green-700">
        Submit Payment
      </button>
    </div>
  );
}

export default Payment;
