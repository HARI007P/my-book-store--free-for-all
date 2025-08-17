import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import list from "../../public/list.json"; // fallback data
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar"; // ✅ Import Navbar

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
    <>
      <Navbar /> {/* ✅ Add Navbar here */}
      <div className="max-w-screen-2xl container mx-auto md:px-10 px-4 py-8">
        <div className="mt-28 text-center">
          <h1 className="text-2xl md:text-4xl font-bold text-white">
            We're delighted to have you{" "}
            <span className="text-pink-500 font-bold">Here! 🎉</span>
          </h1>
         <p className="mt-12 text-white">
  Unlock a world of knowledge and inspiration with our premium collection, 
  thoughtfully curated to enrich your journey. From books to movies and beyond — 
  discover, explore, and enjoy the endless possibilities we bring to you.
</p>


          
        </div>

        {/* Flexible card grid */}
        <div className="mt-12 grid gap-6 
                        grid-cols-1 
                        sm:grid-cols-2 
                        md:grid-cols-3 
                        lg:grid-cols-4 
                        xl:grid-cols-5">
          {(book.length ? book : list).map((item) => (
            <Cards key={item._id || item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
