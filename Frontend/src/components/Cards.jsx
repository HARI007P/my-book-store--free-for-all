import React from "react";
import { useNavigate } from "react-router-dom";

function Cards({ item }) {
  const navigate = useNavigate();

  const handleBuyNow = () => {
    navigate("/payment", {
      state: {
        bookname: item.title,
        image: item.image,
        price: item.price,
      },
    });
  };

  return (
    <div className="p-2">
      <div className="card bg-white w-64 h-[430px] shadow-md rounded-lg hover:scale-105 duration-200 overflow-hidden flex flex-col">
        <figure className="h-[220px] w-full">
          <img
            src={item.image}
            alt="Book Cover"
            className="w-full h-full object-cover"
          />
        </figure>
        <div className="card-body p-3 bg-gray-900 flex flex-col justify-between flex-grow">
          <div>
            <h2 className="text-lg font-semibold text-white break-words mb-1">
              {item.name}
            </h2>
            <div className="badge badge-secondary mb-2">{item.category}</div>
            <p className="text-sm text-gray-700 break-words">{item.title}</p>
          </div>
          <div className="card-actions mt-4 flex justify-between">
            <div className="cursor-pointer px-3 py-1 rounded-full border-[2px] border-gray-400 hover:bg-pink-500 hover:text-white duration-200">
              Add to Cart
            </div>
            <div className="cursor-pointer px-3 py-1 rounded-full border-[2px] border-gray-400 hover:bg-pink-500 hover:text-white duration-200">
              ₹{item.price}
            </div>
            <div
              onClick={handleBuyNow}
              className="cursor-pointer px-3 py-1 rounded-full border-[2px] border-gray-400 hover:bg-pink-500 hover:text-white duration-200"
            >
              Buy Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
