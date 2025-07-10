import React from "react";
import banner from "../../public/book3.png"; // Adjust the path as necessary


function Banner() {
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-1 flex flex-col md:flex-row my-20 ">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36">
          <div className="space-y-8">
            <h1 className="text-2xl md:text-4xl font-bold">
              Hello, welcomes here to learn something{" "}
              <span className="text-pink-500">new everyday!!!</span>
            </h1>
            <p className="text-sm md:text-xl">
            Step into a world where words weave wonders and stories stir souls. Explore our digital library, where each book is a portal to infinite realms of imagination and inspiration.
            </p>
            <label className="input input-bordered flex items-center gap-2 w-full md:w-96">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="darkgray"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>
          </div>
          <button  className="btn mt-3 btn-secondary ">Get Started</button>    
        </div>
        <div className=" order-1 w-full mt-20 md:w-1/2">
          {/* <video
            src={banner}
            autoPlay
            loop
  
            muted
           
        
            

            
            className="md:w-[800px] md:h-[300px] md:ml-1"


            
            alt="hand holding a book"
          /> */}
          
          
          <img src={banner} alt="hand holding a book" className="md:w-[700px] md:h-[500px] md:ml-10" />

        </div>
        
      </div>
    </>
  );
}

export default Banner;
