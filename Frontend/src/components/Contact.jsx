import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import contactImage from "../assets/bookchild.png"; // Replace with your image path

function Contact() {
  return (
    <>
      <div className="container mx-auto px-10 md:px-0 py-10 mt-20">
        <Navbar />
        <h1 className="text-3xl font-bold mb-6">
          Contact Us <span className="text-pink-500">Here! :</span>
        </h1>
        <p className="text-xl mb-8">Have questions or feedback? Reach out to us!</p>

        {/* Layout with Image beside Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Left Column: Image */}
          <div>
            <img
              src={contactImage}
              alt="Contact Illustration"
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {/* Right Column: All Contact Sections */}
          <div className="space-y-10">
            {/* Book Donation Section */}
            <div>
              <h2 className="text-xl font-semibold mb-2">Donate Your Used Books</h2>
              <p className="mb-2">
                Do you have old books that are no longer in use? Help others learn by donating your used books to our platform.
                We ensure they reach the right hands, especially students in need. Your small gesture can make a big difference!
              </p>
              <p className="mb-1">To donate your books, please reach out to us at:</p>
              <div className="flex items-center gap-2 mt-2">
                📧 <a href="mailto:donate.books@gmail.com" className="text-blue-500 hover:underline">donate.books@gmail.com</a>
              </div>
              <div className="flex items-center gap-2 mt-2">
                📞 <a href="tel:+917416219267" className="text-green-500 hover:underline">+91 7416219267</a>
              </div>
            </div>

            {/* Customer Support Section */}
            <div>
              <h2 className="text-xl font-semibold mb-2">Customer Support</h2>
              <p>If you have any questions regarding your orders, returns, or general inquiries, feel free to contact our customer support team.</p>
              <div className="mt-4 flex items-center gap-2">
                📧 <a href="mailto:Hari.07p@gmail.com" className="text-blue-500 hover:underline">Hari.07p@gmail.com</a>
              </div>
              <div className="mt-2 flex items-center gap-2">
                📞 <a href="tel:+917416219267" className="text-green-500 hover:underline">+91 7416219267</a>
              </div>
            </div>

            {/* Business Inquiries Section */}
            <div>
              <h2 className="text-xl font-semibold mb-2">Business Inquiries</h2>
              <p>For business-related inquiries, partnerships, or collaborations, please get in touch with our business development team.</p>
              <div className="mt-4 flex items-center gap-2">
                📧 <a href="mailto:bussiness.hari07p@gamil.com" className="text-blue-500 hover:underline">bussiness.hari07p@gamil.com</a>
              </div>
              <div className="mt-2 flex items-center gap-2">
                📞 <a href="tel:+916305219267" className="text-green-500 hover:underline">+91 6305219267</a>
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
