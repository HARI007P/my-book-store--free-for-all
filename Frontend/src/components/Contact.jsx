import React from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import contactImage from "../assets/bookchild.png";

function Contact() {
  return (
    <>
      <div className="container mx-auto px-6 md:px- py-10 ">
        {/* Back Button */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center bg-pink-500 text-white font-bold px-5 py-2 rounded-full shadow-md hover:bg-pink-600 transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-5 h-5 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Home
          </Link>
        </div>

        {/* Page Heading */}
        <h1 className="text-3xl font-bold mb-6">
          Contact Us <span className="text-pink-500">Here! :</span>
        </h1>
        <p className="text-2xl mb-1 font-semibold">
          Have questions or feedback? Reach out to us!
        </p>

        {/* Main Content */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-20 items-start ">
          {/* Image */}
          <div className="flex hover:scale-105 transition-transform duration-300 items-right ">
            <img
              src={contactImage}
              alt="Contact Illustration"
              className="w-full rounded-lg"
            />
          </div>

          {/* Contact Info */}
          <div className="space-y-1">
            {/* Book Donation */}
            <div>
              <h2 className="text-xl font-semibold mb-2">
                Donate Your Used Books
              </h2>
              <p className="mb-2">
                Do you have old books that are no longer in use? Help others
                learn by donating your used books to our platform. We ensure
                they reach the right hands, especially students in need. Your
                small gesture can make a big difference!
              </p>
              <p className="mb-1">
                To donate your books, please reach out to us at:
              </p>
              <div className="flex items-center gap-2 mt-2">
                📧{" "}
                <a
                  href="mailto:donate.books@gmail.com"
                  className="text-blue-500 hover:underline"
                >
                  donate.books@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2 mt-2">
                📞{" "}
                <a
                  href="tel:+917416219267"
                  className="text-green-500 hover:underline"
                >
                  +91 7416219267
                </a>
              </div>
            </div>

            {/* Customer Support */}
            <div>
              <h2 className="text-xl font-semibold mb-2">Customer Support</h2>
              <p>
                If you have any questions regarding your orders, returns, or
                general inquiries, feel free to contact our customer support
                team.
              </p>
              <div className="mt-4 flex items-center gap-2">
                📧{" "}
                <a
                  href="mailto:Hari.07p@gmail.com"
                  className="text-blue-500 hover:underline"
                >
                  Hari.07p@gmail.com
                </a>
              </div>
              <div className="mt-2 flex items-center gap-2">
                📞{" "}
                <a
                  href="tel:+917416219267"
                  className="text-green-500 hover:underline"
                >
                  +91 7416219267
                </a>
              </div>
            </div>

            {/* Business Inquiries */}
            <div>
              <h2 className="text-xl font-semibold mb-2">
                Business Inquiries
              </h2>
              <p>
                For business-related inquiries, partnerships, or collaborations,
                please get in touch with our business development team.
              </p>
              <div className="mt-4 flex items-center gap-2">
                📧{" "}
                <a
                  href="mailto:bussiness.hari07p@gmail.com"
                  className="text-blue-500 hover:underline"
                >
                  bussiness.hari07p@gmail.com
                </a>
              </div>
              <div className="mt-2 flex items-center gap-2">
                📞{" "}
                <a
                  href="tel:+916305219267"
                  className="text-green-500 hover:underline"
                >
                  +91 6305219267
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Contact;
