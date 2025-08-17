// Frontend/Signup.jsx
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Signup() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({});
  const [email, setEmail] = useState("");

  // Step 1: Send OTP
  const handleUserSubmit = async (data) => {
    try {
      setLoading(true);
      setUserData(data);
      setEmail(data.email);

      const res = await axios.post("http://localhost:4000/api/otp/send", {
        email: data.email,
        fullname: data.fullname,
      });

      if (res.data.success) {
        toast.success("OTP sent to your email");
        setStep(2);
      } else {
        toast.error(res.data.message || "Failed to send OTP");
      }
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.message || "Error sending OTP");
    } finally {
      setLoading(false);
    }
  };

  // Step 2: Verify OTP (No password)
  const handleOTPSubmit = async (data) => {
    try {
      setLoading(true);

      const res = await axios.post("http://localhost:4000/api/otp/verify", {
        fullname: userData.fullname,
        email: userData.email,
        otp: data.otp,
      });

      if (res.data.success) {
        localStorage.setItem("Users", JSON.stringify(res.data.user));
        toast.success("Login successful");
        navigate(from, { replace: true });
      } else {
        toast.error(res.data.message || "Invalid OTP");
      }
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.message || "Verification failed");
    } finally {
      setLoading(false);
    }
  };

  // Resend OTP
  const resendOTP = async () => {
    if (!userData.email || !userData.fullname) {
      toast.error("Please enter your details again");
      setStep(1);
      return;
    }

    try {
      setLoading(true);
      const res = await axios.post("http://localhost:4000/api/otp/send", {
        email: userData.email,
        fullname: userData.fullname,
      });

      if (res.data.success) {
        toast.success("OTP resent to your email");
      } else {
        toast.error(res.data.message || "Failed to resend OTP");
      }
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.message || "Resend failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center px-4">
      <div className="w-full max-w-md p-8 rounded-xl backdrop-blur-xl bg-black/20 border border-black/30 shadow-2xl">
        <h2 className="text-3xl font-bold text-white text-center mb-6 ">
          {step === 1 ? "Login" : "Verify OTP"}
        </h2>

        {/* Step 1: User Info (No password) */}
        {step === 1 && (
          <form onSubmit={handleSubmit(handleUserSubmit)} className="space-y-6">
            <div>
              <label className="block text-white/90 text-sm mb-1">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                {...register("fullname", { required: true })}
                className="w-full px-4 py-2 bg-white/20 text-white rounded-xl placeholder-white/70 focus:outline-none"
              />
              {errors.fullname && <p className="text-xs text-red-200 mt-1">This field is required</p>}
            </div>

            <div>
              <label className="block text-white/90 text-sm mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                {...register("email", { required: true })}
                className="w-full px-4 py-2 bg-white/20 text-white rounded-xl placeholder-white/70 focus:outline-none"
              />
              {errors.email && <p className="text-xs text-red-200 mt-1">This field is required</p>}
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-xl transition duration-300 ${loading ? "bg-blue-300" : "bg-blue-500 hover:bg-blue-600"} text-white`}
            >
              {loading ? "Sending OTP..." : "Send OTP"}
            </button>
          </form>
        )}

        {/* Step 2: OTP Verification */}
{step === 2 && (
  <form onSubmit={handleSubmit(handleOTPSubmit)} className="space-y-6">
    <div>
      <label className="block text-white/90 text-sm mb-1">Enter OTP</label>
      <input
        type="text"
        placeholder="OTP"
        {...register("otp", { required: true })}
        className="w-full px-4 py-2 bg-white/20 text-white rounded-xl placeholder-white/70 focus:outline-none"
      />
      {errors.otp && <p className="text-xs text-red-200 mt-1">OTP is required</p>}
    </div>

    <div className="flex gap-3">
      {/* ✅ Back Button */}
      <button
        type="button"
        onClick={() => setStep(1)}
        className="w-1/2 py-3 rounded-xl bg-gray-500 hover:bg-gray-600 text-white transition duration-300"
      >
        Back
      </button>

      <button
        type="submit"
        disabled={loading}
        className={`w-1/2 py-3 rounded-xl transition duration-300 ${
          loading ? "bg-blue-400" : "bg-blue-500 hover:bg-blue-600"
        } text-white`}
      >
        {loading ? "Verifying..." : "Verify OTP"}
      </button>
    </div>

    <p className="text-sm text-white/80 mt-2 text-center">
      Didn't receive OTP?{" "}
      <button
        type="button"
        onClick={resendOTP}
        disabled={loading}
        className="text-blue-200 hover:underline"
      >
        Resend OTP
      </button>
    </p>
  </form>
)}

      </div>
    </div>
  );
}

export default Signup;
