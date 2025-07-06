import React from 'react';
import Navbar from "../components/Navbar";

function About() {
  return (
     
    <div className="container mx-auto px-40 py-8">
       <Navbar /><><div className="mt-20"></div></>
      <h1 className="text-5xl font-bold mb-4 text-white">About <a className="text-pink-500">us</a></h1>
      <p className="text-lg mb-4 ">
        Welcome to our Hari's BookStore! We are committed to providing book lovers with a convenient and enjoyable shopping experience. Our extensive collection features a wide range of genres, authors, and formats to cater to every reading preference.
      </p>
      <p className="text-lg mb-4">
        Our bookstore is more than just a place to buy books. It's a community hub where readers can discover new titles, connect with fellow book enthusiasts, and engage in meaningful discussions about literature. Whether you're an avid reader, a casual bookworm, or just starting your reading journey, there's something here for you.
      </p>
      <p className="text-lg mb-4">
        At our bookstore, we believe in the power of storytelling to educate, entertain, and inspire. That's why we're constantly updating our collection to include the latest releases, timeless classics, and hidden gems. We're passionate about promoting literacy and fostering a love of reading in readers of all ages.
      </p>
      <p className="text-lg mb-4">
        As a customer-centric bookstore, we prioritize your satisfaction above all else. Our friendly and knowledgeable staff are here to assist you every step of the way, from helping you find the perfect book to answering any questions you may have. We're dedicated to providing exceptional service and creating a positive shopping experience for all our customers.
      </p>
      <p className="text-lg mb-4">
        Thank you for choosing our Hari bookstore as your go-to destination for all things literary. We're honored to be a part of your reading journey and look forward to serving you for years to come.
      </p>
    </div>
  );
}

export default About;