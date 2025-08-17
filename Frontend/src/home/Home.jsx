import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Free from "../components/Freebook";
import Footer from "../components/Footer";

function Home() {
  useEffect(() => {
    // Check if this render is from navigation, not from reload
    const reloaded = sessionStorage.getItem("homeReloaded");

    if (!reloaded) {
      sessionStorage.setItem("homeReloaded", "true");
      window.location.reload();
    } else {
      sessionStorage.removeItem("homeReloaded");
    }
  }, []);

  return (
    <div className=" text-white min-h-screen flex flex-col">
      {/* Container with responsive padding */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 py-6 md:py-10">
        <Navbar />

        {/* Banner Section */}
        <div className="mt-6 md:mt-10">
          <Banner />
        </div>

        {/* Free Books Section */}
        <div className="mt-10 sm:mt-12 md:mt-16">
          <Free />
        </div>
      </div>

      {/* Footer sticks at bottom */}
      <Footer />
    </div>
  );
}

export default Home;
