import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import qrImage from "../assets/upi.jpeg";
import formSideImage from "../assets/harry5.png";
import toast from "react-hot-toast";
import axios from "axios";

function Payment() {
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ Get book details from route state
  const { bookname } = location.state || {};
  const { bookcode } = location.state || {};

  const [utr, setUtr] = useState("");
  const [screenshot, setScreenshot] = useState(null);
  const [name, setName] = useState("");
  const [book_code, setBookcode] = useState("");
  const [mobile, setMobile] = useState("");
  const [village, setVillage] = useState("");
  const [district, setDistrict] = useState("");
  const [pincode, setPincode] = useState("");
  const [state, setState] = useState("");
  const [timeLeft, setTimeLeft] = useState(360); // 6 minutes

  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  };

  useEffect(() => {
    if (timeLeft <= 0) {
      toast.error("⏱ Payment session expired");
      navigate("/");
      return;
    }

    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    if ([300, 240, 180, 120, 60].includes(timeLeft)) {
      const min = timeLeft / 60;
      speak(`${min} minutes left to complete the payment`);
      toast(`⏳ ${min} minute${min > 1 ? "s" : ""} left to complete payment`);
    }

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
    if (!utr.trim() || !name || !village || !district || !book_code || !pincode || !state || !mobile || !screenshot) {
      toast.error("Please fill all fields and upload screenshot");
      return;
    }
    if (book_code.trim() !== (bookcode || "").trim()) {
  toast.error("Enter correct Book Code");
  return;
}


    if (!/^\d{12}$/.test(utr.trim())) {
      toast.error("UTR must be exactly 12 digits");
      return;
    }

    if (!/^\d{10}$/.test(mobile)) {
      toast.error("Enter valid 10-digit mobile number");
      return;
    }

    const formData = new FormData();
    formData.append("utr", utr);
    formData.append("name", name);
    formData.append("book_code", book_code);
    formData.append("village", village);
    formData.append("bookname", bookname || "Unknown Book");
    formData.append("district", district);
    formData.append("pincode", pincode);
    formData.append("state", state);
    formData.append("mobile", mobile);
    formData.append("amount", 43);
    formData.append("upiId", "7416219267@ybl");
    formData.append("screenshot", screenshot);

    try {
      await axios.post("http://localhost:4000/api/payment", formData, {
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
    <div className="bg-gray-400 min-h-screen text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Heading with Back Button */}
        <div className="flex justify-center items-center gap-4 mb-6 mt-4">
          <button
            onClick={() => navigate("/")}
            className="text-white text-3xl hover:text-pink-400 transition-transform transform hover:-translate-x-1"
            title="Back to Home"
          >
            ←
          </button>
          <h2 className="text-5xl md:text-6xl font-bold">
            UPI <span className="text-pink-500">Payment</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Side Image */}
          <div className="md:col-span-1 flex justify-center">
            <img
              src={formSideImage}
              alt="Books Payment"
              className="rounded-lg transform hover:scale-130 transition-transform duration-300"
            />
          </div>

          {/* Right Side Form */}
          <div className="md:col-span-2 flex flex-col items-center">
            <p className="text-xl mb-2">
              <strong className="text-pink-500">UPI ID:</strong> 7416219267@ybl
            </p>
            <img src={qrImage} alt="Scan to Pay" className="w-72 h-64 mb-4" />

            <div className="text-xl font-semibold text-red-600 mb-4">
              Time left: {formatTime(timeLeft)}
            </div>

            <p className="text-lg mb-5 text-center">
              <b>Total: ₹43</b><br />
              After payment, fill in your details and upload your screenshot:
              <span className="text-red-600">*</span>
            </p>

            {/* ✅ Display Book Name */}
            <h5 className="text-pink-500 font-bold mb-4">
              Book Name: <span className="text-white bg-yellow-800 font-semibold">{bookname || "No book selected"}</span>
            </h5>
            <h6 className="text-pink-500 font-bold mb-4">
              Book Code: <span className="text-white bg-yellow-800 font-semibold">{bookcode || "No book selected"}</span>
            </h6>

            <h2 className="text-2xl font-semibold mb-4">Personal Details</h2>
            <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} className="w-80 px-4 py-2 border mb-3 text-white" />
            <input type="text" placeholder="Confirm Book Code" value={book_code} onChange={(e) => setBookcode(e.target.value)} className="w-80 px-4 py-2 border mb-3 text-white" />
            <input type="text" placeholder="Mobile Number" value={mobile} onChange={(e) => setMobile(e.target.value)} className="w-80 px-4 py-2 border mb-3 text-white" />
            <input type="text" placeholder="Village" value={village} onChange={(e) => setVillage(e.target.value)} className="w-80 px-4 py-2 border mb-3 text-white" />
            <input type="text" placeholder="District" value={district} onChange={(e) => setDistrict(e.target.value)} className="w-80 px-4 py-2 border mb-3 text-white" />
            <input type="text" placeholder="Pincode" value={pincode} onChange={(e) => setPincode(e.target.value)} className="w-80 px-4 py-2 border mb-3 text-white" />
            <select value={state} onChange={(e) => setState(e.target.value)} className="w-80 px-4 py-2 border mb-3 text-white">
              <option value="">Select State</option>
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Telangana">Telangana</option>
              <option value="Odisha">Odisha</option>
            </select>
            <input type="text" placeholder="UTR (12 digits)" value={utr} onChange={(e) => setUtr(e.target.value)} className="w-80 px-4 py-2 border mb-3 text-white" />
            <input type="file" accept="image/*" onChange={handleFileChange} className="w-80 mb-4" />

            <button onClick={handlePaymentSubmit} className="bg-pink-600 text-white px-6 py-3 rounded hover:bg-green-700 transition duration-300">
              Submit Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
