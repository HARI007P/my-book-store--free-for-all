import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Cards({ item }) {
  const navigate = useNavigate();
  const [showDescription, setShowDescription] = useState(false);

  const handleBuyNow = () => {
    navigate("/payment", {
      state: {
        bookname: item.name,
        bookcode: item.bookcode,
      },
    });
  };

  const handleDescription = () => {
    setShowDescription(true);
  };

  const closeModal = () => {
    setShowDescription(false);
  };

  return (
    <div className="p-2">
      {/* Card Container */}
      <div className="relative card w-full h-[380px] sm:h-[420px] md:h-[450px] shadow-md rounded-lg hover:scale-105 duration-200 overflow-hidden flex flex-col bg-white">
        {/* Book Image */}
        <figure className="h-[180px] sm:h-[200px] md:h-[240px] w-full">
          <img
            src={item.image}
            alt="Book Cover"
            className="w-full h-full object-cover"
          />
        </figure>

        {/* Card Body */}
        <div className="card-body p-3 sm:p-4 bg-gray-400 flex flex-col justify-between flex-grow">
          <div>
            {/* Book Name - stays in one line */}
            <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 mb-1 whitespace-nowrap overflow-hidden text-ellipsis">
              {item.name}
            </h2>

            {/* Donor */}
            <h2 className="text-sm sm:text-base md:text-lg font-medium text-gray-600 mb-2 truncate">
              Donated By: {item.donar}
            </h2>

            {/* Small Title/Subtitle */}
            <p className="text-xs sm:text-sm md:text-base text-gray-700 line-clamp-2">
              {item.title}
            </p>
          </div>

          {/* Buttons Section */}
          <div className="card-actions mt-4 flex justify-between flex-wrap gap-2">
            <div className="cursor-pointer px-3 py-1 rounded-full border-[2px] border-gray-400 hover:bg-pink-500 hover:text-white text-gray-800 text-sm sm:text-base">
              ₹{item.price}
            </div>

            {item.category === "Sale" && (
              <div
                onClick={handleBuyNow}
                className="cursor-pointer px-3 py-1 rounded-full border-[2px] border-gray-400 hover:bg-pink-500 hover:text-white duration-200 text-gray-800 text-sm sm:text-base"
              >
                Buy Now
              </div>
            )}

            {/* SALE Badge */}
            {item.category === "Sale" && (
              <div className="absolute top-2 left-2">
                <div className="relative bg-green-500 text-white px-3 py-1 rounded-l-full rounded-r-sm shadow-lg text-xs sm:text-sm">
                  <span className="font-bold">SALE</span>
                  <span className="absolute top-1/2 -right-2 transform -translate-y-1/2 w-3 h-3 bg-white rounded-full border border-gray-300"></span>
                </div>
              </div>
            )}

            {/* SOLD OUT Badge */}
            {item.category === "Sold Out" && (
              <div className="absolute top-2 left-2">
                <div className="relative bg-red-700 text-white px-3 py-1 rounded-l-full rounded-r-sm shadow-lg text-xs sm:text-sm">
                  <span className="font-bold">SOLD OUT</span>
                  <span className="absolute top-1/2 -right-2 transform -translate-y-1/2 w-3 h-3 bg-white rounded-full border border-gray-300"></span>
                </div>
              </div>
            )}

            {/* Description Button */}
            <div
              onClick={handleDescription}
              className="cursor-pointer px-3 py-1 rounded-full border-[2px] border-gray-400 hover:bg-pink-500 hover:text-white duration-200 text-gray-800 text-sm sm:text-base"
            >
              Description
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Description */}
      {showDescription && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4">
          <div className="bg-gray-800 p-6 rounded-md max-w-md w-full shadow-lg relative">
            <h2 className="text-lg sm:text-xl font-semibold whitespace-nowrap overflow-hidden text-ellipsis text-white mb-2">
              {item.name}
            </h2>
            <p className="text-white text-sm sm:text-base md:text-lg text-justify">
              {item.description
                ? item.description
                : "No description available for this book."}
            </p>
            <button
              onClick={closeModal}
              className="absolute top-2 right-3 text-white hover:text-red-600 text-xl"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cards;
