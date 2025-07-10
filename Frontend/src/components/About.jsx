import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import aboutImage from "../assets/book4.png"; // ✅ Replace with your actual image

function About() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-6 md:px-20 py-12">
        <h1 className="text-5xl font-bold mb-10 mt-10 text-white">
          About <span className="text-pink-500">Us</span>
        </h1>

        {/* Responsive grid layout */}
        <div className="grid   grid-cols-1 md:grid-cols-2  items-center">
          {/* Left Side Image */}
          <div>
            <img
              src={aboutImage}
              alt="Bookshelf"
              className="md:w-[500px] md:h-[500px] rounded-lg shadow-lg md:shadow-xl transition-transform transform hover:scale-150 duration-10 mx-1 mb-1 md:mb-1"
            />
          </div>

          {/* Right Side Content */}
          <div className="space-y-5 text-xl text-white">
            <p>
              Welcome to <span className="text-pink-400 font-semibold">Hari's BookStore</span>! We are committed to providing book lovers with a convenient and enjoyable shopping experience.
              Our extensive collection features a wide range of genres, authors, and formats to cater to every reading preference.
            </p>
            <p>
              Our bookstore is more than just a place to buy books. It's a community hub where readers can discover new titles, connect with fellow book enthusiasts, and engage in meaningful discussions about literature.
            </p>
            <p>
              We believe in the power of storytelling to educate, entertain, and inspire. That’s why we’re constantly updating our collection to include the latest releases, timeless classics, and hidden gems.
            </p>
            <p>
              At <span className="text-pink-400 font-semibold">Hari Bookstore</span>, customer satisfaction is our top priority. Our friendly team is here to help you find the perfect book and answer any questions.
            </p>
            <p>
              Thank you for choosing us as your reading companion. We’re honored to be part of your literary journey.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
