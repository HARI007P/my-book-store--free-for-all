import React from 'react';
import Navbar from "../components/Navbar";

function Contact() {
  return (
    <div className="container mx-15  px-1 md:px-20 py-20 mt-10">
      <Navbar />
      <h1 className="text-4xl font-bold mb-6">
        Contact Us <span className="text-pink-500">Here! :</span>
      </h1><br /><br />
      <p className="text-lg mb-8">Have questions or feedback? Reach out to us!</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Book Donation Section */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Donate Your Used Books</h2>
          <p className="mb-2">
            Do you have old books that are no longer in use? Help others learn by donating your used books to our platform.
            We ensure they reach the right hands, especially students in need. Your small gesture can make a big difference!
          </p>
          <p className="mb-1 ">To donate your books, please reach out to us at:</p>
          <div className="flex items-center gap-2 mt-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12H8m8 0H8m8 0H8m4 4v4m0-4V8m0 0V4m0 4V8" />
            </svg>
            <span className="text-blue-200 ">Email: donate.books@gmail.com</span>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.68l1.02 3.05a1 1 0 01-.22.94l-1.6 1.6a11.05 11.05 0 005.5 5.5l1.6-1.6a1 1 0 01.94-.22l3.05 1.02a1 1 0 01.68.95V19a2 2 0 01-2 2h-1c-8.28 0-15-6.72-15-15V5z" />
            </svg>
            <span>Phone: +91 7416219267</span>
          </div>
        </div>

        {/* Right Column: Customer Support and Business Inquiries */}
        <div className="space-y-10">
          {/* Customer Support */}
          <div>
            <h2 className="text-xl font-semibold mb-2">Customer Support</h2>
            <p>If you have any questions regarding your orders, returns, or general inquiries, feel free to contact our customer support team.</p>
            <div className="mt-4 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12H8m8 0H8m8 0H8m4 4v4m0-4V8m0 0V4m0 4V8" />
              </svg>
              <span>Email: Hari.07p@gmail.com</span>
            </div>
            <div className="mt-2 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.68l1.02 3.05a1 1 0 01-.22.94l-1.6 1.6a11.05 11.05 0 005.5 5.5l1.6-1.6a1 1 0 01.94-.22l3.05 1.02a1 1 0 01.68.95V19a2 2 0 01-2 2h-1c-8.28 0-15-6.72-15-15V5z" />
              </svg>
              <span>Phone: +91 7416219267</span>
            </div>
          </div>

          {/* Business Inquiries */}
          <div>
            <h2 className="text-xl font-semibold mb-2">Business Inquiries</h2>
            <p>For business-related inquiries, partnerships, or collaborations, please get in touch with our business development team.</p>
            <div className="mt-4 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12H8m8 0H8m8 0H8m4 4v4m0-4V8m0 0V4m0 4V8" />
              </svg>
              <span>Email: bussiness.hari07p@gamil.com</span>
            </div>
            <div className="mt-2 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.68l1.02 3.05a1 1 0 01-.22.94l-1.6 1.6a11.05 11.05 0 005.5 5.5l1.6-1.6a1 1 0 01.94-.22l3.05 1.02a1 1 0 01.68.95V19a2 2 0 01-2 2h-1c-8.28 0-15-6.72-15-15V5z" />
              </svg>
              <span>Phone: +91 6305219267</span>
              
            </div>
          </div>
        
        </div>
        
      </div>
      
    </div>
    
  );
}
export default Contact;
