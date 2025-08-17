import React from "react";
import Home from "./home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";
import About from "./components/About";
import Contact from "./components/Contact";
import Payment from "./components/Payment";
import PrivacyPolicy from "./components/Policy";
import TermsAndConditions from "./components/TermsAndConditions";

import Background from "./assets/book10.jpg"; // Make sure this path is correct

function App() {
  const [authUser, setAuthUser] = useAuth();

  return (
    <div
      className="relative min-h-screen bg-fixed bg-center bg-cover text-gray-200 dark:text-white"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-0"></div>

      {/* Content Wrapper */}
      <div className="relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={authUser ? <Courses /> : <Navigate to="/signup" />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsAndConditions />} />
        </Routes>
        <Toaster />
      </div>
    </div>
  );
}

export default App;
