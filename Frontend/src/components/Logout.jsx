import React from "react";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Logout() {
  const [authUser, setAuthUser] = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    try {
      setAuthUser({
        ...authUser,
        user: null,
        token: null,
      });

      localStorage.removeItem("Users");
      toast.success("Logout successful");

      setTimeout(() => {
        navigate("/signup"); // or navigate("/") if you want to go to homepage
      }, 2000);
    } catch (error) {
      toast.error("Logout failed");
      console.error("Logout Error:", error);
    }
  };

  return (
    <button
      className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md transition duration-300"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
}

export default Logout;
