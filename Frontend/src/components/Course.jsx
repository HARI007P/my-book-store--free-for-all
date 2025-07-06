import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import list from "../../public/list.json"; // fallback data
import axios from "axios";
import { Link } from "react-router-dom";

function Course() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data); // ✅ set backend data
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };
    getBook();
  }, []);

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div className="mt-28 text-center">
        <h1 className="text-2xl md:text-4xl font-bold text-white">
          We're delighted to have you{" "}
          <span className="text-pink-500 font-bold">Here! 🎉</span>
        </h1>
        <p className="mt-12 text-white">
          Unlock a world of expertise with our premium books, curated to empower and enrich your learning journey.
          Whether you're mastering new skills or advancing your career, our content offers depth, clarity, and results.
        </p>
        <Link to="/">
          <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
            Back
          </button>
        </Link>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
        {(book.length ? book : list).map((item) => (
          <Cards key={item._id || item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Course;
